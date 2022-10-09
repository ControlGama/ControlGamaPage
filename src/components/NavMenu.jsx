import React from "react";
import NavItem from "@components/NavItem";
import "@styles/componentsStyles/navMenu.scss";

const NavMenu = ({ itemsMenu }) => {
  return (
    <div className="nav-menu-container">
      <ul className="nav-menu">
        {itemsMenu.map((item,index) => (
          <a href={item.link} key={`NavMenuId${index}`}>
            <NavItem itemMenu={item} />
          </a>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
