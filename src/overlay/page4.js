import React, { useState } from 'react';
import { Wraper } from "./helper";
import { Button } from "./components";

const Page4 = (props) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <Wraper style={{}}>
      <div className="block" style={{ height: "5%" }} />
      <div
        className="imgContainer"
        style={{
          height: "6svh",
          margin: "auto"
        }}
      >
        <img src="/asset/logo.png" alt="Logo" />
      </div>
      <div className="block" style={{ height: "35%" }} />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="formContainer" style={{
          backgroundColor: "#e0a202",
          padding: "0 2rem",
          border: "0.2rem solid #fff",
          borderRadius: "30px",
          width: "95%",
          height: "55svh",
          position: "relative",
        }}>
          <div className="block" style={{ height: "25%" }} />

          <h1 style={{ wordSpacing: "0.1rem", lineHeight: "2.1rem" }}>Instead of chatting <br /> one-on-one at parties, <br />you find a way to bring <br />everyone together. <br />Couldn't be me</h1>

          <div className="block" style={{ height: "5%" }} />

          <div className="rangeSlider" style={{ display: "flex", justifyContent: "space-between", padding: "0 0%", alignItems: "center", position: "relative", height:"5svh" }}>
            <p>Couldn't <br /> be me</p>
            <div className="dottedLine"></div>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={sliderValue}
              onChange={handleSliderChange}
              className="custom-slider" // Add a class for styling
            />

            <p>Me to a T</p>
          </div>

          <div className="block" style={{ height: "5%" }} />

          <Button borderRadius="12px" width="21svh" height="6svh">
            NEXT QUESTION
          </Button>
        </div>
      </div>
    </Wraper>
  );
};

export default Page4;




