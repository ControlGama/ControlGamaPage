import React, { Suspense } from "react";
import DataBox from "@components/DataBox";
import SocialNetworks from "@containers/SocialNetworks";
import { useTranslation } from "react-i18next";
import "@styles/HomeContainer.scss";

const HomeContainer = () => {
  // body: `
  // Hola, mi nombre es Gamaliel Rios, pero me puedes encontrar en la red como ControlGama.
  // Soy programador desde hace poco más de 8 años, me especializo en el lenguaje ABAP de SAP, pero en estos últimos años he estado aprendiendo sobre tecnologías WEB.
  // Soy una persona a la que le gustan los retos. Busco constantemente crecer personal y profesionalmente.
  // `,

  function Render() {
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
          <DataBox data={infoData[0]}/>
        </article>

        <article className="main-content-R">
          <DataBox data={infoData[1]} />
          <SocialNetworks />
        </article>
      </div>
    );
  }

  return <Suspense fallback=""> <Render/> </Suspense>;
};

export default HomeContainer;
