import React from "react";
import NavItem from "@components/NavItem";
import "@styles/NavMenu.scss";

const NavMenu = ({ itemsMenu }) => {
  return (
    <div className="nav-menu-container">
      <ul className="nav-menu">
        {itemsMenu.map((item) => (
          <NavItem itemMenu={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
