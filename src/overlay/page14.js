import React, { useState, useRef, useEffect } from "react";
import { Wraper } from "./helper";
import { Button } from "./components";
import gsap from "gsap";

const Page14 = (props) => {
  const [isPrizeContainerVisible, setPrizeContainerVisibility] =
    useState(false);
  const prizeContainerRef = useRef(null);

  const handleRedeemButtonClick = () => {
    // Add logic here to handle redeeming
    setPrizeContainerVisibility(true);
  };

  useEffect(() => {});

  useEffect(() => {
    // GSAP animations setup
    if (isPrizeContainerVisible) {
      gsap.to(prizeContainerRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "ease-in",
      });
    } else {
      gsap.to(prizeContainerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [isPrizeContainerVisible]);

  return (
    <Wraper style={{ position: "relative" }}>
      {/* <div className="block" style={{ height: "6svh" }} />
      <div className="redeemContainer" style={{
        height: "90svh",
        width: "fit-content",
        margin: "auto",
      }}>
        <div
          className="imgContainer"
          style={{
            height: "55svh",
            margin: "auto",
            boxShadow: "0 0 2rem rgba(0,0,0,0.3)"
          }}
        >
          <img src="/asset/test.jpg" alt="Gift" />
        </div>
        <div className="block" style={{ height: "4svh" }} />
        <h4>Tap the gift box to redeem <br /> your a treat!</h4>
        <div className="block" style={{ height: "2svh" }} />
        <Button backgroundColor="#6da5e2" onClick={handleRedeemButtonClick}>REDEEM</Button>
        <Button backgroundColor="#f4b404">SAVE RESULT VIDEO</Button>
        <Button backgroundColor="#f4b404">SHOP COLLECTION</Button>
      </div>

      {isPrizeContainerVisible && (
        <div
          ref={prizeContainerRef}
          className="prizeContainer"
          style={{ 
            backgroundImage:"url(/asset/bg.png)",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            padding: "0 3rem", 
            borderRadius: "10px", 
            width: "85%", 
            height: "90svh", 
            boxShadow: "0 0 2rem rgba(0,0,0,0.3)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0,
            zIndex: 999,
          }}
        >
          <div className="block" style={{height:"5%"}}/>

          <div
            className="imgContainer"
            style={{
              height : "4svh",
              margin : "auto"
            }}
          >
            <img src="/asset/logo.png" alt="Logo" />
          </div>
          
          <div className="block" style={{height:"8%"}}/>

          <h3 style={{wordSpacing:"0.1rem"}}>HERE'S YOUR <br /> TREAT</h3>

          <div className="block" style={{height:"5%"}}/>

          <div
            className="imgContainer"
            style={{
              height : "15svh",
              margin : "auto"
            }}
          >
            <img src="/asset/activist.png" alt="Activist" />
          </div>
          
          <div className="block" style={{height:"7%"}}/>
          
          <h5>
            Do not tap the button below. <br /> 
            Present it to our staff to redeem.
          </h5>
          
          <div className="block" style={{height:"3%"}}/>

          <Button backgroundColor="#1eae35" fontSize="2svh" onClick={() => setPrizeContainerVisibility(false)}>
            STAFF REDEEM
          </Button>

          <div className="block" style={{height:"3%"}}/>

          <h6>
            WED APR 11 2024 10:05:06 <br /> 
            GMT +0800 (SINGAPORE TIME)
          </h6>
        </div>
      )} */}
    </Wraper>
  );
};

export default Page14;
