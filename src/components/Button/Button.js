import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import left from "../../images/icon-angle-left.svg";
import right from "../../images/icon-angle-right.svg";
import "./style.css";

const Button = () => {
  const { voltar, avancar } = useContext(GlobalContext);

  return (
    <div className="box-button">
      <button onClick={voltar}>
        <img src={left} alt="left" />
      </button>
      <button onClick={avancar}>
        <img src={right} alt="right" />
      </button>
    </div>
  );
};

export default Button;
