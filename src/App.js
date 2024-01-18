import "./App.css";
import THREESCENE from "./3d";
import PhaserScene from "./2d";
import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Page1, FormPage, Page14, Page15, Quest1 } from "./overlay";

function App() {
  const phaserRef = useRef(null);
  return (
    <div className="App">
      <PhaserScene ref={phaserRef} />
      <Routes>
        <Route path="/quest1" element={<Quest1 phaserRef={phaserRef} />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page14" element={<Page14 />} />
        <Route path="/page15" element={<Page15 />} />
        <Route path="/formpage" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
