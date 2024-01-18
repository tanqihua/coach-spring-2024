import "./App.css";
import THREESCENE from "./3d";
import PhaserScene from "./2d";
import React, { useRef , useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { Page1, FormPage, Page14, Page15, Quest1, Quest2, Quest3, Quest4, Quest5 } from "./overlay";

function App() {
  const phaserRef = useRef(null);
  return (
    <div className="App">
      <PhaserScene ref={phaserRef} />
      <NavBarColorHandler/>
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
    </div>
  );
}

function NavBarColorHandler(){
  useEffect(() => {
    // Set the color of the browser's address bar
    document.querySelector('meta[name="theme-color"]').setAttribute('content', 'red');
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return null
}

export default App;
