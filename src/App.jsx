import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import "animate.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <NotFound />
    </div>
  );
}

export default App;
