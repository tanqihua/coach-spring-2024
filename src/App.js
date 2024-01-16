import "./App.css";
import THREESCENE from "./3d";
import PhaserScene from "./2d";
import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Page1, FormPage } from "./overlay";

function App() {
  const threeRef = useRef(null);
  const phaserRef = useRef(null);
  return (
    <div className="App">
      <THREESCENE ref={threeRef} />
      <PhaserScene ref={phaserRef} />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/formpage" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
