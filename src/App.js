import "./App.css";
import THREESCENE from "./3d";
import PhaserScene from "./2d";
import React, { useEffect, useMemo, useRef } from "react";
import { Routes, Route } from "react-router-dom";
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
import { useNavigate } from "react-router-dom";

function App() {
  const phaserRef = useRef(null);

  return (
    <div className="App">
      <PhaserScene ref={phaserRef} />
      <Routes>
        <Route path="/quest1" element={<Quest1 phaserRef={phaserRef} />} />
        <Route path="/quest2" element={<Quest2 phaserRef={phaserRef} />} />
        <Route path="/quest3" element={<Quest3 phaserRef={phaserRef} />} />
        <Route path="/quest4" element={<Quest4 phaserRef={phaserRef} />} />
        <Route path="/quest5" element={<Quest5 phaserRef={phaserRef} />} />

        <Route path="/page1" element={<Page1 />} />
        <Route path="/page14" element={<Page14 />} />
        <Route path="/page15" element={<Page15 />} />
        <Route path="/formpage" element={<FormPage />} />
      </Routes>

      <NavHanderler phaserRef={phaserRef} />
    </div>
  );
}

function NavHanderler({ phaserRef }) {
  const [_phaser, _setPhaser] = React.useState(false);
  useEffect(() => {
    window.setPhaser = (value) => {
      _setPhaser(value);
    };
  }, []);

  useMemo(() => {
    if (_phaser && phaserRef.current) {
      // current path name
      const path = window.location.pathname;

      if (path.includes("quest")) {
        // quest next words
        const quest = path.split("/")[1];
        const lastWord = quest.split("").pop();
        let currentFont = ["c", "o", "a", "c", "h"][lastWord - 1];
        let broadColor = [
          "orangeBroad",
          "blueBroad",
          "orangeBroad",
          "blueBroad",
          "orangeBroad",
        ][lastWord - 1];

        phaserRef.current.scene.scenes[1].currentLetter = currentFont;
        phaserRef.current.scene.scenes[1].currentBroad = broadColor;
        phaserRef.current.scene.start("quests");
      }
    }
  }, [_phaser]);

  return null;
}
export default App;
