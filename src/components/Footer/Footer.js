import React from "react";
import imagem1 from "../../images/image-about-dark.jpg";
import imagem2 from "../../images/image-about-light.jpg";
import "./style.css";

const Footer = () => {
  return (
    <div className="content-bottom">
      <div className="imagem-bottom">
        <img src={imagem1} alt="dark" />
      </div>
      <div className="descricao-bottom">
        <h2>About our furniture</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="imagem-bottom">
        <img src={imagem2} alt="light" />
      </div>
    </div>
  );
};

export default Footer;
