import React, { useState, useRef, useEffect } from "react";
import { Wraper } from "./helper";
import { Button } from "./components";
import { useStore } from "../store";

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

  const handleSaveVideoClick = () => {
    handleShare();
  };

  const handleShare = () => {
    // Check if the navigator.share API is available
    if (navigator.share) {
      navigator
        .share({
          title: "Share Video",
          text: "Check out this amazing video!",
          url: "https://example.com", // Replace with the actual URL of the saved video
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      // Fallback for devices/browsers that don't support navigator.share
      // Implement your custom sharing functionality here
      console.log("navigator.share not supported. Implement custom sharing.");
    }
  };

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
        <div className="block" style={{ height: "3svh" }} />
        <div
          className="redeemContainer"
          style={{
            height: "90svh",
            width: "fit-content",
            margin: "auto",
          }}
        >
          <div
            style={{
              height: "48svh",
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
                textAlign: "left",
                fontSize: "7svh",
                lineHeight: "1",
              }}
            >
              {info?.firstName?.toUpperCase() ?? ""} < br/>      
            </h1>

            <h2
              style={{
                textAlign: "left",
                fontSize: "4svh",
                lineHeight: "1",
              }}
            >
              你是一位
            </h2>

            <div style={{height : "3%"}}/>

            <div
              className="imgContainer"
              style={{height : "65%" , margin : "auto" , marginTop : "-2svh" }}
            >
              <img src={info.tagType + ".webp"} alt="Gift" />
            </div>
          </div>

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

          <div className="block" style={{ height: "2svh" }} />
          <h5
            style={{
              color : "#A64C02",
              lineHeight: "1.2",
            }}
          >
            官網結帳輸入:<br/>
            {info?.code ?? ""}
          </h5>
          <div className="block" style={{ height: "2svh" }} />
          <h4>
            點擊領取專屬禮遇
          </h4>
          <div className="block" style={{ height: "2svh" }} />

          <p
            style={{
              fontSize : "0.rem",
              lineHeight: "1.5",
            }}
          >
            1. 兌換/使用期間 : 即日起至YYYY年MM月DD日​<br/>
            2. 香水、皮件護理產品、數位印製、維修服務及部分商品不適用。<br/>
            3. 每位會員限使用乙次，單筆消費不可與其他優惠活動併用​<br/>
            4. 主辦單位保留最終修改活動內容之權利
          </p>

          <div className="block" style={{ height: "2svh" }} />

          <Button
            backgroundColor="#f4b404"
            name={"saveVideo"}
            onClick={async () => {
              let video;
              let videoLink;
              switch (info?.bagColor) {
                case "blackVideo":
                  video = "/Black_FullVideo.mp4";
                  videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FPORTRAIT_TW_EXPORT_Black_FullVideo.mp4?alt=media&token=8e97c325-0e7d-48b8-97af-b50a7611f07d";
                  break;
                case "purpleVideo":
                  video = "/Purple_FullVideo.mp4";
                  videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FPORTRAIT_TW_EXPORT_Purple_FullVideo.mp4?alt=media&token=648bfbcc-68a3-49e9-9863-b9416e2e2442";
                  break;
                case "yellowVideo":
                  video = "/Yellow_FullVideo.mp4";
                  videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FPORTRAIT_TW_EXPORT_Yellow_FullVideo.mp4?alt=media&token=4a2687f2-d3f8-4384-b3e7-a0ad54463ba6"
                  break;
                case "tyeDyeVideo":
                  video = "/TyeDye_FullVideo.mp4";
                  videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FPORTRAIT_TW_EXPORT_TyeDye_FullVideo.mp4?alt=media&token=65ee334b-74d4-46c1-a37f-923a0939bb25"
                  break;
                case "denimVideo":
                  video = "/Denim_FullVideo.mp4";
                  videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FPORTRAIT_TW_EXPORT_Denim_FullVideo.mp4?alt=media&token=e1b11352-49bb-44f0-8144-3fb68e866521"
                  break;

                default:
                  video = "/Yellow_FullVideo.mp4";
                  videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FPORTRAIT_TW_EXPORT_Yellow_FullVideo.mp4?alt=media&token=4a2687f2-d3f8-4384-b3e7-a0ad54463ba6"
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
                "https://coachaustralia.com/catalog/new/featured/quilted-leather/?start=0&sz=24",
                "_blank"
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
  const [buttonText, setButtonText] = useState("STAFF REDEEM");
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("#1eae35");
  const [redeemTime, setRedeemTime] = useState(new Date());

  const handleStaffRedeemClick = () => {
    switch (buttonText) {
      case "STAFF REDEEM":
        setButtonText("CONFIRM");
        setButtonBackgroundColor("#efa906");
        break;
      case "CONFIRM":
        setButtonText("REDEEMED");
        setButtonBackgroundColor("#9b9696");
        break;
      case "REDEEMED":
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (buttonText === "REDEEMED") {
      const newTime = new Date();
      setRedeemTime(newTime);
    }
  }, [buttonText]);

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

      <h3 style={{ wordSpacing: "0.1rem" }}>
        HERE’S YOUR <br />
        GIFT
      </h3>

      <div className="block" style={{ height: "1%" }} />

      <div
        className="imgContainer"
        style={{
          height: "28svh",
          margin: "auto",
        }}
      >
        <img src="/2d/tag.png" alt="Activist" />
      </div>

      <div className="block" style={{ height: "3%" }} />

      <h5>
        Don’t tap the button below!
        <br />
        Present it to staff to redeem.
      </h5>

      <div className="block" style={{ height: "3%" }} />

      <Button
        backgroundColor={buttonBackgroundColor}
        fontSize="2svh"
        name="staffRedeem"
        onClick={() => {
          handleStaffRedeemClick();
          if (buttonText === "CONFIRM") {
          } else if (buttonText === "REDEEMED") {
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
