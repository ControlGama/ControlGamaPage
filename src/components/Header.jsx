import React from "react";
import NavMenu from "@components/NavMenu";
import '@styles/header.scss'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-menu-mobileContainer">
          <h3 className="nav--menuTitle">Inicio</h3>
        </div>

        <NavMenu />
      </nav>
    </header>
  );
};

export default Header;
