import * as React from "react";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  increment,
  updateDoc,
  collection as col, getDocs, query, orderBy, limit
} from "firebase/firestore";
import {
  query as q,
  where,
} from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { initializeAnalytics, setUserProperties, logEvent as logGAEvent } from "firebase/analytics";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";


const SuperfanContext = createContext();

function uuidv4() {
  let hexDigits = '0123456789abcdef';
  let uuid = '';
  for (let i = 0; i < 36; i++) {
      if (i === 14) {
          uuid += '4'; // set the 15th character to '4' for version 4
      } else if (i === 19) {
          uuid += hexDigits.substr((Math.random() * 4 | 0 + 8), 1); // set the 20th character to a random number between 8 and b
      } else if (i === 8 || i === 13 || i === 18 || i === 23) {
          uuid += '-';
      } else {
          uuid += hexDigits.substr(Math.random() * 16 | 0, 1);
      }
  }
  return uuid;
}

export function SuperfanProvider({ ...props }) {
  const { firebaseConfig, collection, appCheckToken, isDev } = props;
  const timespentInterval = 20;
  const [initialised, setInitiate] = useState(false);
  const uuid = useMemo(() => {
    if (!localStorage.getItem("uuid")) {
      const _uuid = uuidv4();
      localStorage.setItem("uuid", _uuid);
      return _uuid;
    } else {
      return localStorage.getItem("uuid");
    }
  }, []);
  const app = initializeApp(firebaseConfig);

  if (appCheckToken) {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(appCheckToken),
      isTokenAutoRefreshEnabled: true,
    });
  }

  const analytics = initializeAnalytics(app);
  setUserProperties(analytics, {
    brand_name: collection.split("-")[0],
    region_name: collection.split("-")[1],
    campaign_name: collection.split("-")[2],
  });

  const db = getFirestore(app);
  const userDocRef = doc(db, collection, uuid);

  function init(){
    const snapshot = getDoc(userDocRef);
    return new Promise((resolve) => {
      snapshot.then(async (e) => {
        if (e.exists()) {
          resolve(true);
        } else {
          const brand = collection.split("-")[0];
          const region = collection.split("-")[1];
          const campaign = collection.split("-")[2];
          const details = {
            brand,
            region,
            campaign,
            uuid: uuid,
            createTime: new Date().toJSON(),
            redeemTime: null,
            updateTime: null, // for bigquery
            userAgent: navigator.userAgent,
            replay: 0,
            timespent: 0,
            score: 0,
            events: {},
            gameDatas: {},
            dataCollection: null,
          };

          function RecordBasic() {
            setDoc(
              userDocRef,
              {
                ...details,
                geoData: JSON.stringify({}),
              },
              {
                merge: true,
              }
            ).then(() => {
              resolve(true);
            });
          }
          if (isDev) RecordBasic();
          else
            try {
              const { ip } = await axios
                .get("https://api.ipify.org/?format=json")
                .then((res) => res.data);

              const { data } = await axios.get(`https://ipapi.co/${ip}/json/`);

              const {
                city,
                country,
                latitude,
                longitude,
                timezone,
                utc_offset,
              } = data;

              const geoData = {
                city,
                country,
                latitude,
                longitude,
                timezone,
                utc_offset,
              };

              setDoc(
                userDocRef,
                {
                  ...details,
                  geoData: JSON.stringify(geoData),
                },
                {
                  merge: true,
                }
              ).then(() => {
                // setTimerEnabled(true);
                resolve(true);
              });
            } catch (err) {
              console.log(err);
              RecordBasic();
            }
        }
      });
    });
  }

  async function checkIsClaim(email){
    const _q = query(col(db, collection), where("dataCollection.EMAIL", "==", email));
    let data = await getDocs(_q);
    let _ = data.docs.map(doc => doc.data());
    return _[0]?.isRedeemed || false;
    }

  async function updateKey(key, value) {
    await updateDoc(userDocRef, {
      [key]: value,
    });
    return true;
  }

  async function updateReplay() {
    await updateDoc(userDocRef, {
      replay: increment(1),
    });
    return true;
  }

  async function recordEvent(key) {
    logGAEvent(analytics, "event", {
      event_category: "engagement",
      event_label: key,
    }); 
    await updateDoc(userDocRef, {
      [`events.${key}.time`]: new Date().toJSON(),
      [`events.${key}.count`]: increment(1),
    });
    return true;
  }

  async function recordGameData(key, value) {
    const snapshot = await getDoc(userDocRef);
    snapshot.exists() &&
      (await setDoc(userDocRef, {
        gameDatas: {
          [key]: value,
        },
      }, { merge: true}));
    return true;
  }

  async function recordCustomKey(key, value) {
    const snapshot = await getDoc(userDocRef);
    snapshot.exists() &&
      setDoc(
        userDocRef,
        {
          [key]: value,
        },
        {
          merge: true,
        }
      );
    return true;
  }

  async function recordQuiz(name, value) {
    const snapshot = await getDoc(userDocRef);
    snapshot.exists() &&
      updateDoc(
        userDocRef,
        {
          [`gameDatas.quiz.${name}`]: value,
        }
      );
    return true;
  }

  async function getScore() {
      const snapshot = await getDoc(userDocRef);
      return snapshot.data()?.score;
  }

  async function updateScore(score) {
    const prevScore = await getScore();
    if (score > prevScore)
    {await updateDoc(userDocRef, {
      score: score,
    });
    return true;}
  }

  async function getLeaderboard(lim = 10) {
    const querySnap =  query(col(db, collection), orderBy("score", "desc"), limit(lim));
    const snap = await getDocs(querySnap);
    return snap.docs.map(doc => doc.data());
  }

  async function submitForm(props) {
    const snapshot = await getDoc(userDocRef);
    snapshot.exists() &&
      (await updateDoc(doc(db, collection, uuid), {
        dataCollection: {
          ...props,
          date: new Date().toJSON(),
        },
      }));
      logGAEvent(analytics, "event", {
        event_category: "form",
        event_label: "submit",
      });
    return true;
  }

  useEffect(() => {
		init().then(() => {
			setInitiate(true);
			getDoc(userDocRef).then((doc) => {
				doc.exists() &&
					(async () => {
						if (localStorage.getItem("replay")) {
							await updateReplay();
						} else {
							localStorage.setItem("replay", "true");
						}

            setInterval(async () => {
              await updateDoc(userDocRef, {
                timespent: increment(timespentInterval),
              });

            }, timespentInterval * 1000);
					})();
			});
		});
	}, []);

  return (
    <SuperfanContext.Provider
      value={{
        app,
        recordEvent,
        submitForm,
        recordCustomKey,
        recordGameData,
        updateKey,
        updateReplay,
        getScore,
        updateScore,
        getLeaderboard,
        recordQuiz,
        checkIsClaim,
        uuid,
      }}
    >
      {props.children}
      {/* {initialised && props.children} */}
    </SuperfanContext.Provider>
  );
}

export const useSuperfan = () => useContext(SuperfanContext);