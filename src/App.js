import "./App.css";
import THREESCENE from "./3d";
import PhaserScene from "./2d";
import React, { useRef, useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

import {
  Page1,
  FormPage,
  Page14,
  Page15,
  Quest1,
  Quest2,
  Quest3,
  Quest4,
  Quest5,
} from "./overlay";
import { useStore } from "./store";
import { LegerLine, DesktopBlock, PreloadingPage } from "./overlay/components";
function App() {
  const phaserRef = useRef(null);
  const [showPage14, setShowPage14] = React.useState(false);

  useEffect(() => {
    window.setShowPage14 = () => {
      setShowPage14(true);
    };
  }, []);
  return (
    <div className="App">
      <PhaserScene ref={phaserRef} />
      {/* <THREESCENE /> */}
      <Routes>
        <Route path="/" element={<Page1 phaserRef={phaserRef} />} />
        <Route path="/formpage" element={<FormPage phaserRef={phaserRef} />} />
        <Route path="/quest1" element={<Quest1 phaserRef={phaserRef} />} />
        <Route path="/quest2" element={<Quest2 phaserRef={phaserRef} />} />
        <Route path="/quest3" element={<Quest3 phaserRef={phaserRef} />} />
        <Route path="/quest4" element={<Quest4 phaserRef={phaserRef} />} />
        <Route path="/quest5" element={<Quest5 phaserRef={phaserRef} />} />

        <Route path="/page14" element={<Page14 showPage14={showPage14} />} />
        <Route path="/page15" element={<Page15 />} />
      </Routes>
      <NavHanderler phaserRef={phaserRef} />
      <NavBarColorHandler />

      <LanguageContainer />
    </div>
  );
}

function NavBarColorHandler() {
  useEffect(() => {
    // Set the color of the browser's address bar
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", "#a4b8e5");
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return null;
}

function NavHanderler({ phaserRef }) {
  const [_phaser, _setPhaser] = React.useState(false);

  // detech current path
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    window.setPhaser = (value) => {
      _setPhaser(value);
    };
  }, []);

  useMemo(() => {
    if (_phaser && phaserRef.current) {
      // current path name
      const path = window.location.pathname;
      if (path === "/") {
        phaserRef.current.scene.start("landing");
      } else {
        phaserRef.current.scene.start("quests");
      }
    }
  }, [_phaser]);

  return (
    <>
      <PreloadingPage preload={_phaser} />
      {!path.includes("quest") ? <LegerLine /> : null}
    </>
  );
}

const LanguageContainer = (props) => {
  const [language, setLanguage_content] = React.useState("en");
  const { setLanguage } = useStore();
  const location = useLocation();
  const path = location.pathname;

  const language_content = useMemo(() => {
    switch (language) {
      case "en":
        setLanguage("en");
        return {
          lan: "ENG",
          img: "/png100px/sh.png",
        };
      case "kr":
        setLanguage("kr");
        return {
          lan: "한국어",
          img: "/png100px/kr.png",
        };
    }
  }, [language]);

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 9,
        top: "2%",
        right: "1.5%",

        opacity: path === "/page14" ? 0 : 1,
      }}
    >
      <div
        style={{
          width: "7rem",
          height: "2.5rem",
          backgroundColor: "#ecbb3a",
          borderRadius: "1rem",
          position: "relative",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="imgContainer"
            style={{
              width: "1.6rem",
              height: "1.6rem",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
            }}
          >
            <img src={language_content.img} />
          </div>

          <div>
            <p
              style={{
                fontSize: "1rem",
                width: "3rem",
                fontWeight: "bold",
                color: "white",
                margin: "0",
                marginLeft: "0.5rem",
              }}
            >
              {language_content?.lan}
            </p>
          </div>
        </div>
        {/* sellect tag option have eng and korea */}
        <select
          style={{
            width: "100%",
            height: "100%",
            opacity: 0,
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.5)",
            border: "none",
            color: "white",
            textAlign: "center",
            fontSize: "0.5rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          className="custom-select"
          onChange={(e) => {
            setLanguage_content(e.target.value);
          }}
          defaultValue={language}
        >
          <option value="en">ENG</option>
          <option value="kr">한국어</option>
        </select>
      </div>
    </div>
  );
};

export default App;
