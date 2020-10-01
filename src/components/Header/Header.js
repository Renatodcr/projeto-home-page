import React, { useCallback, useRef } from "react";
import "./style.css";
import logo from "../../images/logo.svg";

const Header = () => {
  const menuRef = useRef();
  const navRef = useRef();

  const abrirMenu = useCallback(() => {
    menuRef.current.classList.toggle("active");
    navRef.current.classList.toggle("active");
  }, []);

  return (
    <div className="header">
      <span onClick={abrirMenu} ref={menuRef} className="menu-mobile"></span>
      <img className="logo" src={logo} alt="logo" />
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
