import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { DesktopBlock } from "./overlay/components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <MobileView>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MobileView>

    <BrowserView>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BrowserView>
  </>
);
