import React from "react";
import NavItem from "@components/NavItem";
import '@styles/NavMenu.scss'

const NavMenu = () => {
  return (
    <div className="nav-menu-container">
      <ul className="nav-menu">
      <NavItem></NavItem>
      <NavItem></NavItem>
      <NavItem></NavItem>

      </ul>
    </div>
  );
};

export default NavMenu;
