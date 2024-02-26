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
  apiKey: "AIzaSyAhTSZaLywAb9kRLEAav68fjCcYlOku0_k",
  authDomain: "testerdemo-888a3.firebaseapp.com",
  databaseURL:
    "https://testerdemo-888a3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "testerdemo-888a3",
  storageBucket: "testerdemo-888a3.appspot.com",
  messagingSenderId: "427838279275",
  appId: "1:427838279275:web:3ea334b515efc29f82ab2e",
  measurementId: "G-X007KTPZ6X",
};

const collectionId = "coach-my-spring2024";

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
      <SuperfanProvider
        firebaseConfig={firebaseConfig}
        collection={collectionId}
        isDev={false}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SuperfanProvider>
    </BrowserView>
  </>
);
