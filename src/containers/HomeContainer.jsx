import React from "react";
import DataBox from "@components/DataBox";
import SocialNetworks from "@containers/SocialNetworks"
import "@styles/HomeContainer.scss"

const HomeContainer = () => {
  const infoData = [
    {
      title: "Sobre Mi",
      body: `
      Hola, mi nombre es Gamaliel Rios, pero me puedes encontrar en la red como ControlGama. 
      Soy programador desde hace poco más de 8 años, me especializo en el lenguaje ABAP de SAP, pero en estos últimos años he estado aprendiendo sobre tecnologías WEB.
      Soy una persona a la que le gustan los retos. Busco constantemente crecer personal y profesionalmente.
      `,
    },
    {
      title: "Bienvenid@ a mi web!",
      body: `
      Este sitio lo hice para poner en práctica todo lo que voy aprendiendo sobre tecnología, para publicar mis proyectos y compartir mi trayectoria laboral.  
      Pero mi idea a corto-mediano plazo es convertir este espacio en un lugar donde pueda subir todo lo que se me ocurra, desde blogs hasta las herramientas que vaya creando. 
      `,
    },
  ];

  return (
    <div className="home-container">
      <article className="main-content-L">
        <h1>ControlGama</h1>
        <div className="main-photo-container"></div>
        <DataBox data={infoData[0]} />
      </article>

      <article className="main-content-R">
        <DataBox data={infoData[1]} />
        <SocialNetworks />
      </article>
    </div>
  );
};

export default HomeContainer;
