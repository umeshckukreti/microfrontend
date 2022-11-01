import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "../screen/about";
import Carrier from "../screen/carrier";
import Home from "../screen/home";
import Services from "../screen/services";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/carrier" element={<Carrier />} />
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
