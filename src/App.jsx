import { useState } from "react";

import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Home />
      <Navbar />
      <h1 className="text-5xl font-bold underline">Vite + React</h1>
    </>
  );
}

export default App;
