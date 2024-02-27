import React, { useState, useRef, useEffect } from "react";
import { Wraper } from "./helper";
import { Button } from "./components";
import { useStore } from "../store";

const Page14 = (props) => {
  const { showPage14 } = props;
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
          }}
        >
          <div
            className="imgContainer"
            style={{
              height: "55svh",
              margin: "auto",
              boxShadow: "0 0 2rem rgba(0,0,0,0.3)",
            }}
          >
            <img src={info?.url ?? "/asset/test.jpg"} alt="Gift" />
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

          <div className="block" style={{ height: "4svh" }} />
          <h4>
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
          <Button
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
          </Button>
          <Button
            backgroundColor="#f4b404"
            name={"saveVideo"}
            onClick={async () => {
              let video;

              switch (info?.bagColor) {
                case "blackVideo":
                  video = "/Black_FullVideo.mp4";
                  break;
                case "purpleVideo":
                  video = "/Purple_FullVideo.mp4";
                  break;
                case "yellowVideo":
                  video = "/Yellow_FullVideo.mp4";
                  break;
                case "tyeDyeVideo":
                  video = "/TyeDye_FullVideo.mp4";
                  break;
                case "denimVideo":
                  video = "/Denim_FullVideo.mp4";
                  break;

                default:
                  video = "/Yellow_FullVideo.mp4";
                  break;
              }

              var blob = await fetch("/2d" + video).then((r) => r.blob());
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
            onClick={() => {}}
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

      <h4 style={{ wordSpacing: "0.1rem" }}>
        HERE’S YOUR <br />
        TREAT
      </h4>

      <div className="block" style={{ height: "6%" }} />

      <div
        className="imgContainer"
        style={{
          height: "16svh",
          margin: "auto",
        }}
      >
        <img src="/asset/treat1.webp" alt="Activist" />
      </div>

      <div className="block" style={{ height: "12%" }} />

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

export default Page14;
