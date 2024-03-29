import React from "react";
import NavMenu from "@components/NavMenu";
import NavMenuMobile from "@components/NavMenuMobile";
import { HomeIcon, TrendingUpIcon, CogIcon, BriefcaseIcon } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";
import "@styles/componentsStyles/header.scss";

const Header = () => {

  const { t, i18n, ready } = useTranslation("Header");

  if (!ready) return "";

  const itemsMenu = [
    { name: t("home"), link: "/", icon: HomeIcon },
    { name: t("workHistory"), link: "/MyCV", icon: TrendingUpIcon },
    { name: t("Projects"), link: "/Projects", icon: BriefcaseIcon },
    { name: t("settings"), link: "/Settings", icon: CogIcon },
  ];

  return (
    <header>
      <nav>
        <NavMenu itemsMenu={itemsMenu} />
        <NavMenuMobile itemsMenu={itemsMenu} />
      </nav>
    </header>
  );
};

export default Header;
