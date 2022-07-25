import React from "react";
import NavMenu from "@components/NavMenu";
import NavMenuMobile from "@components/NavMenuMobile";
import "@styles/Header.scss";

const Header = () => {
  const itemsMenu = [
    { id: 0, name: "Home", link: "/" },
    { id: 1, name: "My CV", link: "/MyCV" },
    { id: 2, name: "Page Settings", link: "/PageSettings" },
  ];

  return (
    <header>
      <nav>
        <NavMenu itemsMenu={itemsMenu} />
        <NavMenuMobile  itemsMenu={itemsMenu} />
      </nav>
    </header>
  );
};

export default Header;
