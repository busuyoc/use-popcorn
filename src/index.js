import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarRating from "./StarRating";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color={"red"} className={"test"} defaultRating={3} /> */}
  </React.StrictMode>
);
