import React, { useRef, useState } from "react";
import './App.css';
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <main>
    <div className="App">
       <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
    </div>
    </main>
  );
}

export default App;
