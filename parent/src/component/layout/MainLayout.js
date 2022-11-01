import React from "react";
import Header from "../header/Header";
import "./styles.css";

function MainLayout(props) {
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-child">{props.children}</div>
    </div>
  );
}

export default MainLayout;
