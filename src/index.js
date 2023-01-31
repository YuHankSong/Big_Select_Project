import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Header.scss";
import "./pages/Wish/style/index.scss";
import "./pages/Wish/style/wishtalk.scss";
import "./pages/Wish/style/wishcontent.scss";
import App from "./App";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React StrictMode runs render twice, so useEffect [] won't work sometimes
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
