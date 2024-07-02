import { Wraper } from "./helper";
import { Button, ButtonRound, Input, Terms , InputMobile} from "./components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStore } from "../store";
import { useSuperfan } from "../context";
function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1; // Months are zero-based
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Pad with leading zeros if necessary
  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return '' + day + month + hours + minutes;
}

const FormPage = (props) => {
  const { phaserRef } = props;
  const { submitForm , recordCustomKey} = useSuperfan();
  const nav = useNavigate();
  const { setInfo, setplayAnimation, language } = useStore();
  const [info, addInfo] = useState({
    EMAIL: null,
    FIRSTNAME: null,
    LASTNAME: null,
    MOBILE: null,
    countryCode: "+886",
    terms: null,
    code : null,
  });

  return (
    <Wraper
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="formContainer"
        style={{
          backgroundColor: "#f4b404",
          padding: "0 3rem", // Adjust the padding as needed
          borderRadius: "15px", // Optional: Add border-radius for rounded corners
          width: window.innerWidth * 0.9, // Adjust the width as needed
          height: "45rem", // Adjust the height as needed
          position: "relative",
          boxShadow: "0 0 1rem rgba(0,0,0,0.2)",
        }}
      >
        <div className="block" style={{ height: "8%" }} />

        <h2>
          {language.formPage.title1.split("\n").map((item, key) => {
            return (
              <span
                key={key}
                style={{
                  fontSize: "inherit",
                }}
              >
                {item}
                <br />
              </span>
            );
          })}
        </h2>

        <div className="block" style={{ height: "3%" }} />

        <Input
          placeholder={language.formPage.firstName}
          onChange={(e) => {
            let date = new Date();
            addInfo((prevInfo) => ({
              ...prevInfo,
              FIRSTNAME: e.target.value,
              code: e.target.value.slice(0, 3) + formatDate(date)
            }));

            setInfo({
              code: e.target.value.slice(0, 3) + formatDate(date)
            });
          }}
        />
        <Input
          placeholder={language.formPage.lastName}
          onChange={(e) => {
            addInfo((prevInfo) => ({
              ...prevInfo,
              LASTNAME: e.target.value,
            }));
          }}
        />

        <Input
          placeholder={language.formPage.email}
          onChange={(e) => {
            addInfo((prevInfo) => ({
              ...prevInfo,
              EMAIL: e.target.value,
            }));
          }}
        />

        <InputMobile countryCode = {info?.countryCode} addInfo = {addInfo}/>

        <div className="block" style={{ height: "3%" }} />
        <Terms terms={info?.terms ?? false} setInfo={addInfo} />

        <div className="block" style={{ height: "2%" }} />
        <ButtonRound
          name={"submitForm"}
          id={"submitForm"}
          onClick={() => {
            window.scrollTo(0, 0);
            // check if all fields are filled
            if (info.FIRSTNAME && info.LASTNAME && info.EMAIL && info.terms) {
              // if mobile is not valid
              // if (info.MOBILE.length < 6) {
              //   alert("Please enter a valid mobile number");
              //   return;
              // }

              window.FIRSTNAME = info.FIRSTNAME;
              setInfo({
                firstName: info.LASTNAME,
                email: info.EMAIL,
              });

              submitForm(info);
              recordCustomKey("email" , info.EMAIL);
              // setplayAnimation(true);
              phaserRef.current.scene.scenes[2].scene.start("quests");
              nav("/quest1");
            } else {
              alert("Please fill in all the fields");
            }
          }}
        >
          NEXT
        </ButtonRound>
      </div>
    </Wraper>
  );
};

export default FormPage;
