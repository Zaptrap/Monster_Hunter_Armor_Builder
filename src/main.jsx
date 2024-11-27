import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Import Tailwind CSS or other global styles
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Ensure this matches the `id` in your HTML file
);