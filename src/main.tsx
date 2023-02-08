import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationCTX } from "@/context/navigation/store";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("_app") as HTMLElement).render(
  <NavigationCTX>
    <App />
  </NavigationCTX>
);
