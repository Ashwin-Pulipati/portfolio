import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "./index.css";
import App from "./App";
import { FeedbackProvider } from "./components/projects/components/FeedbackContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FeedbackProvider>
    <App />
  </FeedbackProvider>
);
