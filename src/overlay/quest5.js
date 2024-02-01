import React, { useState, useEffect } from "react";
import { Wraper } from "./helper";
import { Button } from "./components";
import Quest from "./quest";
// nav
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";
import axios from "axios";
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

  const { addPoint, point, info, setInfo } = useStore();

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
          Do you prefer to stick to <br />
          (and get great at) what <br />
          you know, or explore <br />
          the unknown?
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
            What I <br /> know
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
            The great <br /> unknown
          </p>
        </div>
      </div>

      <div className="block" style={{ height: "8%" }} />

      <Button
        borderRadius="12px"
        width="21svh"
        height="6svh"
        onClick={() => {
          let totalPoint = Object.values(point).reduce(
            (a, b) => parseInt(a) + parseInt(b),
            0
          );

          let videoType = null;
          totalPoint = totalPoint + _currentPoint;

          switch (totalPoint) {
            case totalPoint < 20:
              videoType = "blackVideo";
              break;
            case totalPoint < 40:
              videoType = "purpleVideo";
              break;
            case totalPoint < 60:
              videoType = "yellowVideo";
              break;
          }

          let random = [
            "blackVideo",
            "purpleVideo",
            "yellowVideo",
            "tyeDyeVideo",
            "denimVideo",
          ].sort(() => Math.random() - 0.5)[0];

          let color;

          switch (random) {
            case "blackVideo":
              color = "black";
              break;
            case "purpleVideo":
              color = "purple";
              break;
            case "yellowVideo":
              color = "yellow";
              break;
            case "tyeDyeVideo":
              color = "brown";
              break;
            case "denimVideo":
              color = "grey";
              break;
            default:
              color = "black";
              break;
          }

          setInfo({
            bagColor: color,
          });

          axios
            .get("https://coachname.onrender.com", {
              params: {
                name: info.firstName ?? "undefined",
                color: color,
              },
            })
            .then((res) => {
              setInfo({
                url: res.data.url,
              });
              console.log(res.data.url);
            })
            .catch((err) => console.log(err));

          addPoint(_currentPoint, "5");

          phaserRef.current.scene.scenes[1].playVideo(random);
          nav("/page14");
        }}
      >
        GET RESULTS
      </Button>
    </Quest>
  );
};

export default Index;
