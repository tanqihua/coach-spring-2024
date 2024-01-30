import React, { useState, useRef, useEffect } from "react";
import { Wraper } from "./helper";
import { Button } from "./components";
import { useStore } from "../store";

const Page14 = (props) => {
  const { showPage14 } = props;
  const [isPrizeContainerVisible, setPrizeContainerVisibility] =
    useState(false);

  const handleRedeemButtonClick = () => {
    // Add logic here to handle redeeming
    setPrizeContainerVisibility(true);
  };

  const { info } = useStore();

  const handleSaveVideoClick = () => {
    handleShare();
  };

  const handleShare = () => {
    // Check if the navigator.share API is available
    if (navigator.share) {
      navigator.share({
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
          opacity: showPage14 ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          pointerEvents: showPage14 ? "auto" : "none",
          backgroundImage: "url(/2d/start_bg2.jpg)",
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
          <div className="block" style={{ height: "4svh" }} />
          <h4>
            Tap the gift box to redeem <br /> your a treat!
          </h4>
          <div className="block" style={{ height: "2svh" }} />
          <Button backgroundColor="#6da5e2" onClick={handleRedeemButtonClick}>
            REDEEM
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
          <Button backgroundColor="#f4b404" onClick={() => {}}>
            SAVE RESULT VIDEO
          </Button>
          <Button backgroundColor="#f4b404">SHOP COLLECTION</Button>
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

  return (
    <div
      className="prizeContainer"
      style={{
        backgroundImage: "url(/asset/bg.png)",
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
          height: "4svh",
          margin: "auto",
        }}
      >
        <img src="/asset/logo.png" alt="Logo" />
      </div>

      <div className="block" style={{ height: "8%" }} />

      <h3 style={{ wordSpacing: "0.1rem" }}>
        HERE’S YOUR <br /> TREAT
      </h3>

      <div className="block" style={{ height: "12%" }} />

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
        Do not tap the button below. <br />
        Present it to our staff to redeem.
      </h5>

      <div className="block" style={{ height: "3%" }} />

      <Button
        backgroundColor={buttonBackgroundColor}
        fontSize="2svh"
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

      <h6>
        WED APR 11 2024 10:05:06 <br />
        GMT +0800 (SINGAPORE TIME)
      </h6>
    </div>
  );
};

export default Page14;
