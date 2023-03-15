import React, { useRef, useState } from "react";
import './App.css';
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
    <Routes>
    <Route exact path="/" element={<Home/>} />
    </Routes>
    </div>
  );
}

export default App;
