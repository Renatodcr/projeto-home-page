import React from "react";
import Header from "./components/Header/Header";

import "./App.css";
import { Slider } from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
