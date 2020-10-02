import React, { useCallback, useContext, useRef } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import logo from "../../images/logo.svg";
import "./style.css";

const Header = () => {
  const { home } = useContext(GlobalContext);
  const menuRef = useRef();
  const navRef = useRef();

  const abrirMenu = useCallback(() => {
    menuRef.current.classList.toggle("active");
    navRef.current.classList.toggle("active");
  }, []);

  return (
    <div className="header">
      <span onClick={abrirMenu} ref={menuRef} className="menu-mobile"></span>
      <img onClick={home} className="logo" src={logo} alt="logo" />
      <nav ref={navRef} className="nav">
        <a
          className="link"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          home
        </a>
        <a
          className="link"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          shop
        </a>
        <a
          className="link"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          about
        </a>
        <a
          className="link"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
