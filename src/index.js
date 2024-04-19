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
import { HelmetProvider , Helmet } from "react-helmet-async";

const firebaseConfig = {
  apiKey: "AIzaSyCvOLqEkE3S0K6NKMW6vIO5MjVdxJ4k0Zw",
  authDomain: "superfan-3a794.firebaseapp.com",
  projectId: "superfan-3a794",
  storageBucket: "superfan-3a794.appspot.com",
  messagingSenderId: "18328979437",
  appId: "1:18328979437:web:b6fb5190d1b2ba9445c9e4",
  measurementId: "G-9MNC1K6CRJ",
};

const collectionId = "coach-kr-spring2024";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <MobileView>
      <HelmetProvider>
          <Helmet>
            {/* csp */}
            <meta
              http-equiv="Content-Security-Policy"
              content="
                default-src 'self' https://firebase.googleapis.com;
                img-src 'self' data: blob:;
                connect-src 'self' https://firebasestorage.googleapis.com https://firestore.googleapis.com https://firebase.googleapis.com https://www.google-analytics.com;
                script-src-elem 'self' https://www.googletagmanager.com;
              "
              />
          </Helmet>
          <SuperfanProvider
            firebaseConfig={firebaseConfig}
            collection={collectionId}
            isDev={false}
          >
            <BrowserRouter>
                <App />
            </BrowserRouter>
          </SuperfanProvider>
      </HelmetProvider>
    </MobileView>

    <BrowserView>
      <DesktopBlock/>
    </BrowserView>
  </>
);
