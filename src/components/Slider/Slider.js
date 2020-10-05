import React, { useContext, useCallback } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import Descricao from "../Descricao/Descricao";
import Imagens from "../Imagens/Imagens";
import "./style.css";

const Slider = () => {
  const { voltar, avancar } = useContext(GlobalContext);

  const keyboard = useCallback(
    (e) => {
      e.preventDefault();
      if (e.key === "ArrowRight") {
        avancar();
      } else if (e.key === "ArrowLeft") {
        voltar();
      }
    },
    [avancar, voltar]
  );

  window.addEventListener("keydown", keyboard);
  return (
    <div className="content">
      <Imagens />
      <Descricao />
    </div>
  );
};

export default Slider;
