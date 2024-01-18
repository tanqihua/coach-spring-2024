import React, { useState } from "react";
import { Wraper } from "./helper";
import { Button } from "./components";
import Quest from "./quest";
const Page4 = (props) => {
  const { phaserRef } = props;

  const handleSliderChange = (event) => {
    let _temp = event.target.value;
    if (_temp >= 24) _temp = 45;
    phaserRef.current.scene.scenes[1].targetFrame = _temp;
  };

  return (
    <Quest>
      <div
        className="block"
        style={{
          height: "20%",
        }}
      />
      <h1 style={{ wordSpacing: "0.1rem", lineHeight: "2.1rem" }}>
        Instead of chatting <br /> one-on-one at parties, <br />
        you find a way to bring <br />
        everyone together. <br />
        Couldn't be me
      </h1>

      <div className="block" style={{ height: "8%" }} />

      <div
        className="rangeSlider"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 0%",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "23%",
          }}
        >
          <p
            style={{
              textAlign: "left",
            }}
          >
            Couldn't <br /> be me
          </p>
        </div>
        {/* <div className="dottedLine"></div> */}
        <div
          style={{
            position: "relative",
            width: "70%",
          }}
        >
          <input
            type="range"
            min="0"
            max={24}
            step="1"
            derfaultValue="15"
            style={{
              width: "100%",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50% , -50%)",
            }}
            onChange={handleSliderChange}
            className="custom-slider" // Add a class for styling
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "absolute",
              width: "100%",
              left: "50%",
              top: "50%",
              transform: "translate(-50% , -50%)",
            }}
          >
            {new Array(20).fill(0).map((_, i) => {
              return <div className="dot" key={i} />;
            })}
          </div>
        </div>

        <div
          style={{
            width: "23%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <p
            style={{
              width: "fit-content",
            }}
          >
            Me to a T
          </p>
        </div>
      </div>

      <div className="block" style={{ height: "8%" }} />

      <Button
        borderRadius="12px"
        width="21svh"
        height="6svh"
        onClick={() => {
          let random = ["a", "c", "o", "h"];
          let letter = random[Math.floor(Math.random() * random.length)];
          let color = ["blue", "orange"];
          let colorPick = color[Math.floor(Math.random() * color.length)];
          phaserRef.current.scene.scenes[1].setNextQuestion(colorPick, letter);
        }}
      >
        NEXT QUESTION
      </Button>
    </Quest>
  );
};

export default Page4;
