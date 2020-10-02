import React, { useContext, useRef, useEffect } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import iconFlecha from "../../images/icon-arrow.svg";
import Button from "../Button/Button";
import "./style.css";

const Descricao = () => {
  const { dados, x } = useContext(GlobalContext);
  const h1Ref = useRef();
  const pRef = useRef();

  useEffect(() => {
    h1Ref.current.classList.add("ativo");
    pRef.current.classList.add("ativo");
    setTimeout(() => {
      h1Ref.current.classList.remove("ativo");
      pRef.current.classList.remove("ativo");
    }, 500);
  }, [x]);

  return (
    <div className="descricao">
      <h1 ref={h1Ref}>{dados[x].titulo}</h1>
      <p ref={pRef}>{dados[x].paragrafo}</p>
      <a href="#home">
        Shop now <img src={iconFlecha} alt="icon-flecha" />
      </a>
      <Button />
    </div>
  );
};

export default Descricao;
