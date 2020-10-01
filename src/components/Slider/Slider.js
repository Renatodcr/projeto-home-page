import React, { useState, useCallback, useRef } from "react";
import left from "../../images/icon-angle-left.svg";
import right from "../../images/icon-angle-right.svg";
import iconFlecha from "../../images/icon-arrow.svg";
import img1 from "../../images/desktop-image-hero-1.jpg";
import img2 from "../../images/desktop-image-hero-2.jpg";
import img3 from "../../images/desktop-image-hero-3.jpg";
import "./style.css";

export const Slider = () => {
  const [x, setX] = useState(0);
  const h1Ref = useRef();
  const pRef = useRef();
  const imgRef = useRef();
  const dados = [
    {
      img: img1,
      titulo: "Discover innovative ways to decorate",
      paragrafo:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      img: img2,
      titulo: "We are available all across the globe",
      paragrafo:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      img: img3,
      titulo: "Manufactured with the best materials",
      paragrafo:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ];

  const avancar = useCallback(() => {
    x === dados.length - 1 ? setX(0) : setX(x + 1);
    h1Ref.current.classList.add("ativoE");
    pRef.current.classList.add("ativoE");
    imgRef.current.classList.add("ativo");
    setTimeout(() => {
      h1Ref.current.classList.remove("ativoE");
      pRef.current.classList.remove("ativoE");
      imgRef.current.classList.remove("ativo");
    }, 500);
  }, [dados, x]);

  const voltar = useCallback(() => {
    x === 0 ? setX(dados.length - 1) : setX(x - 1);
    h1Ref.current.classList.add("ativo");
    pRef.current.classList.add("ativo");
    imgRef.current.classList.add("ativoE");
    setTimeout(() => {
      h1Ref.current.classList.remove("ativo");
      pRef.current.classList.remove("ativo");
      imgRef.current.classList.remove("ativoE");
    }, 500);
  }, [dados.length, x]);

  return (
    <div className="content">
      <div ref={imgRef} className="imagem">
        <img src={dados[x].img} alt="img1" />
      </div>
      <div className="descricao">
        <h1 ref={h1Ref}>{dados[x].titulo}</h1>
        <p ref={pRef}>{dados[x].paragrafo}</p>
        <a href="#home">
          Shop now <img src={iconFlecha} alt="icon-flecha" />
        </a>
        <div className="box-button">
          <button onClick={voltar}>
            <img src={left} alt="left" />
          </button>
          <button onClick={avancar}>
            <img src={right} alt="right" />
          </button>
        </div>
      </div>
    </div>
  );
};
