import React from "react";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import { GlobalStorage } from "./components/GlobalContext/GlobalContext";
import "./App.css";

function App() {
  return (
    <GlobalStorage>
      <div className="app">
        <Header />
        <Slider />
        <Footer />
      </div>
    </GlobalStorage>
  );
}

export default App;
