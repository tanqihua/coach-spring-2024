import React, { useEffect, useState } from "react";
import { Wraper , convertRange} from "./helper";
import { Button } from "./components";
import Quest from "./quest";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";
import { useSuperfan } from "@pikabobalex/superfan-module";
const Quest1 = (props) => {
  const { phaserRef } = props;
  const {recordQuiz} = useSuperfan();
  const nav = useNavigate();
  let _currentPoint = 11;
  const handleSliderChange = (event) => {
    let _temp = event.target.value;
    if (_temp >= 20) _temp = 45;
    phaserRef.current.scene.scenes[1].targetFrame = _temp;

    // check is playing inflate sound
    if (_currentPoint < event.target.value) {
      if (!phaserRef.current.scene.scenes[1].infration.isPlaying) {
        phaserRef.current.scene.scenes[1].infration.play();
      }
    } else {
      if (!phaserRef.current.scene.scenes[1].defration.isPlaying) {
        phaserRef.current.scene.scenes[1].defration.play();
      }
    }

    _currentPoint = event.target.value;
  };

  //
  const { addPoint, point, language } = useStore();

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
          {
          language.type === "kr" ?
          language.quest1.title1.split("\n").map((item, key) => {
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
          })
          
          :

          <>
            Instead of chatting<br/>
            one-on-one at parties,<br/> you find a way to bring <br/><span style={{
              font : "inherit",
              fontStyle : "italic",
            }}>everyone</span> together.
          </>
          
          }
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
              fontSize: language.type === "kr" ? "0.81rem" : "0.78rem",
            }}
          >
            {
              language.quest1.left.split("\n").map((item, key) => {
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
              }) // Add a class for styling

            }
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
              fontSize: language.type === "kr" ? "0.81rem" : "0.78rem",
            }}
          >
            {
              language.quest1.right.split("\n").map((item, key) => {
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
              }) // Add a class for styling
            }{" "}
          </p>
        </div>
      </div>

      <div className="block" style={{ height: "4%" }} />

      <Button
        borderRadius="12px"
        width="21svh"
        height="6svh"
        name={"q1"}
        onClick={() => {
          addPoint(_currentPoint, "1");
          phaserRef.current.scene.scenes[1].setNextQuestion("blue", "o");

          // 
          let t = language.quest1.title1.replaceAll("\n" , " ");
          let p = convertRange(_currentPoint);

          recordQuiz("1", {
            question: t,
            answer: p,
          });
          nav("/quest2");
        }}
      >
        NEXT QUESTION
      </Button>
    </Quest>
  );
};


export default Quest1;
