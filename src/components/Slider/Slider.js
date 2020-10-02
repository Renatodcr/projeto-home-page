import React from "react";
import Descricao from "../Descricao/Descricao";
import Imagens from "../Imagens/Imagens";
import "./style.css";

const Slider = () => {
  return (
    <div className="content">
      <Imagens />
      <Descricao />
    </div>
  );
};

export default Slider;
