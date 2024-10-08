import React, { useState, useEffect } from "react";
import { Wraper , convertRange} from "./helper";
import { Button } from "./components";
import Quest from "./quest";
// nav
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";
import axios from "axios";
import { useSuperfan } from "@pikabobalex/superfan-module";


const Index = (props) => {
  const { recordGameData } = useSuperfan();
  const { phaserRef } = props;
  const nav = useNavigate();
  let _currentPoint = 11;
  const {recordQuiz} = useSuperfan();


  const handleSliderChange = (event) => {
    let _temp = event.target.value;
    if (_temp >= 20) _temp = 45;
    phaserRef.current.scene.scenes[1].targetFrame = _temp;

    addPoint(event.target.value, "5");
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

  const { addPoint, point, info, setInfo, language } = useStore();

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
          {language.quest5.title1.split("\n").map((item, key) => {
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
            {language.quest5.left.split("\n").map((item, key) => {
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
            {language.quest5.right.split("\n").map((item, key) => {
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
          </p>
        </div>
      </div>

      <div className="block" style={{ height: "4%" }} />

      <Button
        borderRadius="12px"
        width="21svh"
        height="6svh"
        name={"q5"}
        onClick={() => {
          let totalPoint = Object.values(point).reduce(
            (a, b) => parseInt(a) + parseInt(b),
            0
          );

          let t = language.quest5.title1.replaceAll("\n" , " ");
          let p = convertRange(_currentPoint);

          recordQuiz("5", {
            question: t,
            answer: p,
          });


          let videoType = null;
          let tagType = null;

          if (totalPoint <= 23) {
            videoType = "blackVideo";
            tagType = "/2d/T_activist";
          } else if (totalPoint <= 23 * 2) {
            videoType = "purpleVideo";
            tagType = "/2d/T_visionary";
          } else if (totalPoint <= 23 * 3) {
            videoType = "yellowVideo";
            tagType = "/2d/T_creative";
          } else if (totalPoint <= 23 * 4) {
            videoType = "tyeDyeVideo";
            tagType = "/2d/T_lover";
          } else {
            videoType = "denimVideo";
            tagType = "/2d/T_explorer";
          }

          let tt = {
            ...point,
            total: totalPoint,
            videoType: videoType,

          };

          recordGameData("recordGmaeData", tt);

          setInfo({
            bagColor: videoType,
            tagType: tagType,
          });

          axios
            .get("https://coachspring-backendhandle.onrender.com", {
              params: {
                name: info.firstName ?? "undefined",
                color: videoType,
              },
            })
            .then((res) => {
              setInfo({
                url: res.data.url,
              });
            })
            .catch((err) => console.log(err));

          addPoint(_currentPoint, "5");

          phaserRef.current.scene.scenes[1].playVideo(videoType);
          nav("/page14");
        }}
      >
        GET RESULTS
      </Button>
    </Quest>
  );
};

export default Index;
