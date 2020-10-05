import React, { createContext, useCallback, useState } from "react";
import img1 from "../../images/desktop-image-hero-1.jpg";
import img2 from "../../images/desktop-image-hero-2.jpg";
import img3 from "../../images/desktop-image-hero-3.jpg";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [x, setX] = useState(0);
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
  }, [dados, x]);

  const voltar = useCallback(() => {
    x === 0 ? setX(dados.length - 1) : setX(x - 1);
  }, [dados.length, x]);

  const home = useCallback((e) => {
    e.preventDefault();
    setX((x) => (x = 0));
  }, []);

  return (
    <GlobalContext.Provider value={{ x, dados, avancar, voltar, home }}>
      {children}
    </GlobalContext.Provider>
  );
};
