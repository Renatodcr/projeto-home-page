import React, { useContext, useRef, useEffect } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import "./style.css";

const Imagens = () => {
  const { dados, x } = useContext(GlobalContext);
  const imgRef = useRef();

  useEffect(() => {
    imgRef.current.classList.add("ativo");
    setTimeout(() => {
      imgRef.current.classList.remove("ativo");
    }, 500);
  }, [x]);

  return (
    <div ref={imgRef} className="imagem">
      <img src={dados[x].img} alt="img1" />
    </div>
  );
};

export default Imagens;
