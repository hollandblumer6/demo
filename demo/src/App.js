import React, { useRef, useState } from "react";
import './App.css';
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <main>
    <div className="App">
       <Home />
    </div>
    </main>
  );
}

export default App;
