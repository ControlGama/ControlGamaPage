import React from "react";
import DataBox from "@components/DataBox";
import SocialNetworks from "@containers/SocialNetworks"
import "@styles/HomeContainer.scss"

const HomeContainer = () => {
  const infoData = [
    {
      title: "Sobre Mi",
      body: "Me llamo Gamaliel Rios, pero me pueden encontrar en la red como ControlGama. Tengo 26 años y me he dedicado a la programación desde hace ya 10 años, más específicamente como desarrollador SAP-ABAP. Vivo en México y estoy estudiando la carrera de ingeniería en Software.",
    },
    {
      title: "Hola y bienvenid@ a mi web!",
      body: "Este sitio lo hice principalmente para poner en práctica los conocimientos que voy adquiriendo como técnico programador, para mostrar los proyectos en los que he trabajado y en los que quiero trabajar. Pero mi idea a mediano plazo es poder convertir este pequeño espacio en un lugar para poder expresar ideas, crear herramientas, etc. En general me gustaría convertirlo en una especie de navaja suiza.",
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
