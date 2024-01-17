import "./App.css";
import THREESCENE from "./3d";
import PhaserScene from "./2d";
import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Page1, FormPage, Quest } from "./overlay";

function App() {
  const phaserRef = useRef(null);
  return (
    <div className="App">
      <PhaserScene ref={phaserRef} />
      <Routes>
        <Route path="/" element={<Quest />} />
        <Route path="/formpage" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
