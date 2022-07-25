import React, { useState } from "react";
import NavItem from "@components/NavItem";
import { MenuIcon } from "@heroicons/react/solid";
import "@styles/NavMenuMoile.scss";


const NavMenuMoile = ({itemsMenu}) => {
  
  const [toggle, setToggle] = useState(false);

  const HandleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="nav-menu-mobile-container" >
     
      <MenuIcon className={"menu"} onClick={HandleToggle}/>

      <ul className={ toggle ? "nav-menu-Mobile" : "nav-menu-Mobile no-display"}>
        {itemsMenu.map((item) => (
          <NavItem itemMenu={item} key={item.id} />
        ))}
      </ul>

    </div>
  );
};

export default NavMenuMoile;
