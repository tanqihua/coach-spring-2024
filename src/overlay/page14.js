import React, { useState, useRef, useEffect } from "react";
import { Wraper } from "./helper";
import { Button } from "./components";
import { useStore } from "../store";
import { useSuperfan } from "@pikabobalex/superfan-module";
const Page14 = (props) => {
  const { showPage14 , loadingVideo} = props;
  const [_showPage14, setShowPage14] = useState(false);
  const [isPrizeContainerVisible, setPrizeContainerVisibility] =
    useState(false);

  const handleRedeemButtonClick = () => {
    // Add logic here to handle redeeming
    setPrizeContainerVisibility(true);
  };

  const { info, language } = useStore();


  return (
    <>
        <LoadingVideo loadingVideo = {loadingVideo}/>


        <Wraper style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          opacity: showPage14 ? 1 : 0,
          pointerEvents: showPage14 ? "auto" : "none",
          width: "fit-content",
          left: "50%",
          transform: "translate(-50%, 0%)",
          zIndex: _showPage14 ? -1 : 999,
        }}
      >
        <LoadingVideo />
        <div
          onClick={() => {
            setShowPage14(true);
          }}
        >
          <Button
            style={{
              opacity: _showPage14 ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
              pointerEvents: _showPage14 ? "none" : "auto",
            }}
            name={"result"}
            onClick={() => {}}
          >
            NEXT
          </Button>
        </div>
      </div>

      <div
        style={{
          opacity: _showPage14 ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          pointerEvents: _showPage14 ? "auto" : "auto",
          backgroundImage: "url(/asset/BG_01.webp)",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
        }}
      >
        <div className="block" style={{ height: "6svh" }} />
        <div
          className="redeemContainer"
          style={{
            height: "90svh",
            width: "fit-content",
            margin: "auto",
            // maxWidth: "100%"
          }}
        >
          <div
            style={{
              height: "55svh",
              margin: "auto",
              position: "relative",
              width : "76svw"
              // boxShadow: "0 0 2rem rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="imgContainer"
              style={{height : "8%" , width : "fit-content" , margin : "auto"}}
            >
              <img src={"/asset/logo.png"} alt="Gift" />
            </div>

            <div style={{height : "7%"}}/>

            <h1
              style={{
                textAlign: "left", // center
                fontSize: "7svh",
                lineHeight: "1.2", // 1
              }}
            >
              {info?.name.toUpperCase().slice(0,3)} 님, < br/>      
            </h1>

            <h2
              style={{
                textAlign: "left", //center
                fontSize: "6svh",
                lineHeight: "1",
              }}
              >
                
                {language.page14.greeting.split("\n").map((item, key) => {
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

              {/* <div style={{height : "3%"}}/> */}

                <div
                className="imgContainer"
                style={{
                  height: "65%",
                  margin: "auto",
                  maxWidth: "100%",
                }}
              >
                <img src={info.tagType} alt="Gift" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
            
            <div style={{height : "1%"}}/>

            <h2
              style={{
                textAlign: "right", //center
                fontSize: "6svh",
                lineHeight: "1",
                marginTop: "-10%" // add
              }}
              >
                
                {language.page14.greeting2.split("\n").map((item, key) => {
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

          <div
            style={{
              background:
                "linear-gradient(0deg, rgba(255,255,255,0) 0%, #9194c729 50%, rgba(255,255,255,0) 100%)",
              height: "40svh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
              top: "41%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />

          <div className="block" style={{ height: "4svh" }} />
          <h4
            style={{
              fontSize : language.type === "kr" ? "1.1rem" : "1.8rem",
            }}
          >
            {language.page14.title1.split("\n").map((item, key) => {
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
          </h4>
          <div className="block" style={{ height: "2svh" }} />

          {/* <Button
            name={"redeem"}
            backgroundColor="#6da5e2"
            onClick={handleRedeemButtonClick}
          >
            {language.page14.redeem.split("\n").map((item, key) => {
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
            <div
              className="imgContainer"
              style={{
                height: "2.5svh",
                margin: "auto",
                position: "absolute",
                top: "50%",
                right: "5%",
                transform: "translate(-55%,-55%)",
              }}
            >
              <img src="/asset/gift_icon.png" />
            </div>
          </Button> */}


            <Button
            backgroundColor="#f4b404"
            name={"saveVideo"}
            onClick={async () => {
              let video;
              let videoLink;
              switch (info?.bagColor) {
                case "blackVideo":
                  video = "/Black_FullVideo.mp4";
                  if(language.type === "kr"){
                    videoLink = "https://firebasestorage.googleapis.com/v0/b/superfan-3a794.appspot.com/o/coachSpring%2FPORTRAIT_KR_EXPORT_Black_FullVideo.mp4?alt=media&token=41db27c2-51ba-4903-8bbd-059385df31a4"
                  }
                  else{
                    videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FBlack_FullVideo.mp4?alt=media&token=8e97c325-0e7d-48b8-97af-b50a7611f07d";
                  }
                  break;
                case "purpleVideo":
                  video = "/Purple_FullVideo.mp4";
                  if(language.type === "kr"){
                    videoLink = "https://firebasestorage.googleapis.com/v0/b/superfan-3a794.appspot.com/o/coachSpring%2FPORTRAIT_KR_EXPORT_Purple_FullVideo.mp4?alt=media&token=f59fd3b1-a59d-4ba0-90f1-449d262eace1"
                  }
                  else{
                    videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FPurple_FullVideo.mp4?alt=media&token=648bfbcc-68a3-49e9-9863-b9416e2e2442";
                  }
                  break;
                case "yellowVideo":
                  video = "/Yellow_FullVideo.mp4";
                  if(language.type === "kr"){
                    videoLink = "https://firebasestorage.googleapis.com/v0/b/superfan-3a794.appspot.com/o/coachSpring%2FPORTRAIT_KR_EXPORT_Yellow_FullVideo.mp4?alt=media&token=fe7d6320-fc6a-4ece-b902-855238512990"
                  }
                  else{
                    videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FYellow_FullVideo.mp4?alt=media&token=4a2687f2-d3f8-4384-b3e7-a0ad54463ba6"
                  }
                  break;
                case "tyeDyeVideo":
                  video = "/TyeDye_FullVideo.mp4";
                  if(language.type === "kr"){
                    videoLink = "https://firebasestorage.googleapis.com/v0/b/superfan-3a794.appspot.com/o/coachSpring%2FPORTRAIT_KR_EXPORT_Tyedye_FullVideo.mp4?alt=media&token=7ad6d70e-976d-4db8-8df6-dc081e608465"
                  }
                  else{
                    videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FTyeDye_FullVideo.mp4?alt=media&token=65ee334b-74d4-46c1-a37f-923a0939bb25"
                  }
                  break;
                case "denimVideo":
                  video = "/Denim_FullVideo.mp4";
                  if(language.type === "kr"){
                    videoLink = "https://firebasestorage.googleapis.com/v0/b/superfan-3a794.appspot.com/o/coachSpring%2FPORTRAIT_KR_EXPORT_Denim_FullVideo.mp4?alt=media&token=2d9d065f-a896-4130-be57-3f8852d0c5df"
                  }
                  else{
                    videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FDenim_FullVideo.mp4?alt=media&token=e1b11352-49bb-44f0-8144-3fb68e866521"
                  }
                  break;

                default:
                  video = "/Yellow_FullVideo.mp4";
                  if(language.type === "kr"){
                    videoLink = "https://firebasestorage.googleapis.com/v0/b/superfan-3a794.appspot.com/o/coachSpring%2FPORTRAIT_KR_EXPORT_Yellow_FullVideo.mp4?alt=media&token=fe7d6320-fc6a-4ece-b902-855238512990"
                  }
                  else{
                    videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FYellow_FullVideo.mp4?alt=media&token=4a2687f2-d3f8-4384-b3e7-a0ad54463ba6"
                  }
                  break;
              }


              var blob = await fetch(
                videoLink
              ).then((r) => r.blob());
              if (navigator.share) {
                navigator
                  .share({
                    files: [
                      new File([blob], "video.mp4", {
                        type: "video/mp4",
                      }),
                    ],
                  })
                  .then(() => {
                    console.log("Thanks for sharing!");
                  })
                  .catch(console.error);
              }
            }}
          >
            {language.page14.saveresultvideo.split("\n").map((item, key) => {
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
          </Button>
          <Button
            backgroundColor="#f4b404"
            name={"shopCollection"}
            onClick={() => {
              // https://coachaustralia.com/catalog/new/featured/quilted-leather/?start=0&sz=24
              window.open(
                "https://korea.coach.com/m/main.html"
              );
            }}
          >
            {language.page14.shopcollection.split("\n").map((item, key) => {
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
          </Button>
        </div>

        <PopUp
          isPrizeContainerVisible={isPrizeContainerVisible}
          setPrizeContainerVisibility={setPrizeContainerVisibility}
        />
      </div>
    </Wraper>
    </>
  );
};

const PopUp = ({
  isPrizeContainerVisible = false,
  setPrizeContainerVisibility,
  
}) => {
  const { info, language } = useStore();
  const [buttonText, setButtonText] = useState(language.page14.buttonText);
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("#1eae35");
  const [redeemTime, setRedeemTime] = useState(new Date());
  const {recordCustomKey} = useSuperfan();
  const handleStaffRedeemClick = () => {
    switch (buttonText) {
      case language.page14.buttonText:
        setButtonText(language.page14.confirmText);
        setButtonBackgroundColor("#efa906");
        break;
      case language.page14.confirmText:
        setButtonText(language.page14.confirmedText);
        setButtonBackgroundColor("#9b9696");
        break;
      case language.page14.confirmedText:
        recordCustomKey("redeemTime" , new Date());
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (buttonText === language.page14.confirmedText) {
      const newTime = new Date();
      setRedeemTime(newTime);
    }
  }, [buttonText, language]);

  return (
    <div
      className="prizeContainer"
      style={{
        backgroundImage: "url(/asset/popup22.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "0 3rem",
        borderRadius: "10px",
        width: "85%",
        height: "90svh",
        boxShadow: "0 0 2rem rgba(0,0,0,0.3)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: isPrizeContainerVisible ? 1 : 0,
        pointerEvents: isPrizeContainerVisible ? "auto" : "none",
        zIndex: 999,

        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <div className="block" style={{ height: "5%" }} />

      <div
        className="imgContainer"
        style={{
          height: "4.5svh",
          margin: "auto",
        }}
      >
        <img src="/asset/logo.png" alt="Logo" />
      </div>
      <div className="block" style={{ height: "6%" }} />

      <h3 style={{ wordSpacing: "0.1rem", fontSize: "3.5svh",}}>
        {language.page14.title2.split("\n").map((item, key) => {
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
      </h3>

      <div className="block" style={{ height: "1%" }} />

      <div
        className="imgContainer"
        style={{
          height: "28svh",
          margin: "auto",
        }}
      >
        {/* <img src="/2d/tag.png" alt="Activist" /> */}

        <img src={info.tagType} alt="Gift" style={{ width: "100%", height: "auto" }} />
      </div>

      <div className="block" style={{ height: "3%" }} />

      <h5 style={{ fontSize: "1.5svh" }}>
       {language.page14.instruction.split("\n").map((item, key) => {
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
      </h5>

      <div className="block" style={{ height: "3%" }} />

      <Button
        backgroundColor={buttonBackgroundColor}
        fontSize="2svh"
        id={"staffRedeemButton"}
        name= {"staffRedeemButton"}
        onClick={() => {
          handleStaffRedeemClick();
          if (buttonText === language.page14.confirmText) {
          } else if (buttonText === language.page14.confirmedText) {
            setPrizeContainerVisibility(false);
          }
        }}
      >
        {buttonText}
      </Button>

      <div className="block" style={{ height: "3%" }} />

      <h5
        style={{
          width: "80%",
          margin: "auto",
          fontSize: "0.9rem",
          lineHeight: "1.2",
        }}
      >
        {redeemTime
          .toLocaleString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: false,
            timeZoneName: "long",
          })
          .replace(/,/g, "")
          .toUpperCase()}{" "}
        (
        {redeemTime
          .toLocaleString(undefined, { timeZoneName: "short" })
          .split(" ")
          .pop()
          .toUpperCase()}
        )
      </h5>
    </div>
  );
};

const LoadingVideo = ({loadingVideo}) => {
  
  return (
    <div
      id="loadingVideo"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        opacity: loadingVideo ? 1 : 0,
        width: "100svw",
        height: "100svh",
        zIndex: 100,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.5s ease-in-out",
        pointerEvents: loadingVideo ? "auto" : "none",
      }}
    >
      <div className="dotContainer">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </div>
  );
};

export default Page14;
