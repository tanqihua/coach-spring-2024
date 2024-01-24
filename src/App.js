import "./App.css";
import THREESCENE from "./3d";
import PhaserScene from "./2d";
import React, { useRef, useEffect, useMemo } from "react";
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
      <LegerLine />
      <NavBarColorHandler />
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
        window.location.href = "/";
      }
    }
  }, [_phaser]);

  return <PreloadingPage preload={_phaser} />;
}
export default App;
