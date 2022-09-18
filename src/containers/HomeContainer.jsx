import React from "react";
import DataBox from "@components/DataBox";
import SocialNetworks from "@containers/SocialNetworks";
import { useTranslation } from "react-i18next";
import "@styles/HomeContainer.scss";

const HomeContainer = () => {
  const { t } = useTranslation("Home");

  const infoData = [
    {
      key: "aboutMe",
      title: t("aboutMeTitle"),
      body: t("aboutMeBody", { returnObjects: true }),
    },

    {
      key: "aboutSite",
      title: t("aboutSiteTitle"),
      body: t("aboutSiteBody", { returnObjects: true }),
    },
  ];

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
