import React from "react";
import ReactDom from "react-dom/client";
import { App } from "./App";


let root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
