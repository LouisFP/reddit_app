import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Subreddits from "./features/Subreddits/Subreddits";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="r" element={<Subreddits />} />
          {/* <Route path='r/:post' element={<Post />} */}
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
