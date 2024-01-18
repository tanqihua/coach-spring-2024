import "./App.css";
import THREESCENE from "./3d";
import PhaserScene from "./2d";
import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Page1, Page4, FormPage, Quest, Page14, Page15 } from "./overlay";

function App() {
  const phaserRef = useRef(null);
  return (
    <div className="App">
      <PhaserScene ref={phaserRef} />
      <Routes>
        <Route path="/" element={<Quest />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page14" element={<Page14 />} />
        <Route path="/page15" element={<Page15 />} />
        <Route path="/formpage" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
