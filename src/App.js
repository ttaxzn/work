import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import { Route, Routes } from "react-router-dom";

var colors = ["#554348", "#514355", "#474355", "#434a55"];
var currentIndex = 0;

setInterval(function () {
  document.body.style.cssText = "background-color: " + colors[currentIndex];
  currentIndex++;
  if (currentIndex === undefined || currentIndex >= colors.length) {
    currentIndex = 0;
  }
}, 1000);

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/work" element={<Work />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
