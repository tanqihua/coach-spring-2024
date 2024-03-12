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
import { SuperfanProvider } from "@pikabobalex/superfan-module";

const firebaseConfig = {
  apiKey: "AIzaSyCvOLqEkE3S0K6NKMW6vIO5MjVdxJ4k0Zw",
  authDomain: "superfan-3a794.firebaseapp.com",
  projectId: "superfan-3a794",
  storageBucket: "superfan-3a794.appspot.com",
  messagingSenderId: "18328979437",
  appId: "1:18328979437:web:b6fb5190d1b2ba9445c9e4",
  measurementId: "G-9MNC1K6CRJ",
};

const collectionId = "coach-au-spring2024";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <MobileView>
      <SuperfanProvider
        firebaseConfig={firebaseConfig}
        collection={collectionId}
        isDev={false}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SuperfanProvider>
    </MobileView>

    <BrowserView>
      <DesktopBlock/>
    </BrowserView>
  </>
);
