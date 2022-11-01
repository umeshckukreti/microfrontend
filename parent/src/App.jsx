import React from "react";
import ReactDOM from "react-dom";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";

import "./index.css";
import Navigation from "./navigation";

const App = () => (
  <div className="">
    <Navigation />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
