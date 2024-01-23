import React, { useState } from "react";
import { Wraper } from "./helper";
import { Button } from "./components";
import Quest from "./quest";
// nav
import { useNavigate } from "react-router-dom";
const Index = (props) => {
  const { phaserRef } = props;
  const nav = useNavigate();
  const handleSliderChange = (event) => {
    let _temp = event.target.value;
    if (_temp >= 20) _temp = 45;
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
      <div
        style={{
          height: "20svh",
        }}
      >
        <h1 style={{ wordSpacing: "0.1rem", lineHeight: "2.1rem" }}>
          Do you triple-check dress <br />
          codes before heading to <br />
          events, or pick your ‘fit <br />
          intuitively?
        </h1>
      </div>

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
              textAlign: "center",
            }}
          >
            Go by the <br />
            codes
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
            max={22}
            step="1"
            defaultValue={11}
            style={{
              width: "100%",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50% , -50%)",
              zIndex: 1,
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
              alignItems: "center",
            }}
          >
            {new Array(21).fill(0).map((_, i) => {
              return (
                <div
                  className={[0, 10, 20].includes(i) ? "circle" : "dot"}
                  key={i}
                />
              );
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
            Feel it out
          </p>
        </div>
      </div>

      <div className="block" style={{ height: "8%" }} />

      <Button
        borderRadius="12px"
        width="21svh"
        height="6svh"
        onClick={() => {
          phaserRef.current.scene.scenes[1].setNextQuestion("orange", "h");
          nav("/quest5");
        }}
      >
        NEXT QUESTION
      </Button>
    </Quest>
  );
};

export default Index;
