import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";
axios.defaults.timeout = 5000;
axios.defaults.headers = {
  "Content-Type": 'application/json',
  Authorization : 'Bearer auth_token',
};

axios.interceptors.request.use((config) => {
  console.log(config);
  return { 
    ...config,
    headers : { ...config.headers, Authorization : "Bearer toke" },
  };
})


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //  <React.StrictMode>
      <App />
  // </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
