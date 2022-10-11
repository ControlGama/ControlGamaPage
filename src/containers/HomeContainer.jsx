import React from "react";
import DataBox from "@components/DataBox";
import SocialNetworks from "@containers/SocialNetworks";
import { useTranslation } from "react-i18next";
import "@styles/containersStyles/homeContainer.scss";

const HomeContainer = () => {
  const { t, i18n, ready } = useTranslation("Home");

  if (!ready) return "";

  const infoData = t("infoData", { returnObjects: true })


  return (
    <div className="home-container">
      <article className="main-content-L">
        <h1>ControlGama</h1>
        <div className="main-photo-container"></div>
        <SocialNetworks title={t("socialNetworks")} />
      </article>

      <article className="main-content-R">
        <DataBox data={infoData[0]} />
        <DataBox data={infoData[1]} />
      </article>
    </div>
  );
};

export default HomeContainer;
