import React, { useState } from "react";
import { Wraper } from "./helper";
import { Button } from "./components";
import Quest from "./quest";
// nav
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";

const Index = (props) => {
  const { phaserRef } = props;
  const nav = useNavigate();
  let _currentPoint = 11;
  const handleSliderChange = (event) => {
    let _temp = event.target.value;
    if (_temp >= 20) _temp = 45;
    phaserRef.current.scene.scenes[1].targetFrame = _temp;

    _currentPoint = event.target.value;
  };

  const { addPoint, point } = useStore();

  return (
    <Quest>
      <div
        className="block"
        style={{
          height: "25%",
        }}
      />
      <div
        style={{
          height: "18svh",
        }}
      >
        <h1
          style={{
            wordSpacing: "0.1rem",
            lineHeight: "1.95rem",
            color: "#faf3e3",
          }}
        >
          Do you start your day <br />
          with a to-do list, or <br />
          leave it open to stay
          <br /> open to surprises?
        </h1>
      </div>

      <div className="block" style={{ height: "4%" }} />

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
            Love
            <br />a list
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
                  className={[0, 20].includes(i) ? "circle" : "dot"}
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
            Send me
            <br />
            surprise
          </p>
        </div>
      </div>

      <div className="block" style={{ height: "4%" }} />

      <Button
        borderRadius="12px"
        width="21svh"
        height="6svh"
        onClick={() => {
          addPoint(_currentPoint, "2");
          phaserRef.current.scene.scenes[1].setNextQuestion("orange", "a");
          nav("/quest3");
        }}
      >
        NEXT QUESTION
      </Button>
    </Quest>
  );
};

export default Index;
