import React, { useState } from 'react';
import { Wraper } from "./helper";
import { Button } from "./components";

const Page14 = (props) => {
  const [isPrizeContainerVisible, setPrizeContainerVisibility] = useState(false);
  const [sellected, setSellected] = useState(null);

  const handleRedeemButtonClick = () => {
    // Add logic here to handle redeeming
    setSellected(1);
    setPrizeContainerVisibility(true);
  };

  return (
    <Wraper style={{ position: "relative" }}>
      <div className="block" style={{ height: "6svh" }} />
      <div className="redeemContainer" style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "90svh",
        width: "fit-content",
        margin: "auto",
        position: "relative",
      }}>
        <div
          className="imgContainer"
          style={{
            height: "55svh",
            margin: "auto",
            boxShadow: "0 0 2rem rgba(0,0,0,0.3)"
          }}
        >
          <img src="/asset/test.jpg" />
        </div>
        <div className="block" style={{ height: "4svh" }} />
        <h4>Tap the gift box to redeem <br /> your a treat!</h4>
        <div className="block" style={{ height: "1%" }} />
        <Button backgroundColor="#6da5e2" onClick={handleRedeemButtonClick}>REDEEM</Button>
        <Button backgroundColor="#f4b404">SAVE RESULT VIDEO</Button>
        <Button backgroundColor="#f4b404">SHOP COLLECTION</Button>
      </div>

      {isPrizeContainerVisible && (
        <div className="prizeContainer" style={{ 
          backgroundColor: "#ff99a7",
          padding: "0 3rem", 
          borderRadius: "10px", 
          width: "85%", 
          height: "90svh", 
          boxShadow: "0 0 2rem rgba(0,0,0,0.3)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: sellected === 1 ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          zIndex: 999,
        }}>
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
          
          <h5>Do not tap the button below. <br /> Present it to our staff to redeem.</h5>
          
          <div className="block" style={{height:"3%"}}/>

          <Button backgroundColor="#1eae35" fontSize="2svh" onClick={() => setPrizeContainerVisibility(false)}>
            STAFF REDEEM
          </Button>

          <div className="block" style={{height:"3%"}}/>

          <h6>WED APR 11 2024 10:05:06 <br /> GMT +0800 (SINGAPORE TIME)</h6>
        </div>
      )}
    </Wraper>
  );
};

export default Page14;



