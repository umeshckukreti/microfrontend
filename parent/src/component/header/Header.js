import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
function Header() {
  return (
    <div className="header-container">
      <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>about</Link>
      <Link to={"/services"}>service</Link>
      <Link to={"/carrier"}>carrier</Link>
    </div>
  );
}

export default Header;
