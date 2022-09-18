import React from "react";
import ExperienceBox from "@components/ExperienceBox";
import ToolsBox from "@components/ToolsBox";
import "@styles/MyCvContainer.scss";

const MyCvContainer = () => {

  const educationData = [
    {
      title: "lorem..",
      body: "lorem ...",
    }
  ]

  return (
    <div className="myCvContainer">
      <div className="headerContainer">
        <div className="main-photo-container"></div>
        <div className="headerData">
          Nombre: Nahaliel Gamaliel Rios Martinez
          <br />
          Edad: 27 años
          <br />
          Contacto: nahalielgamaliel@gmail.com
          <br />
          <br />
          Objetivo: ser y estar holis
        </div>
      </div>

      <div className="myCVSection">
        <h2>🎓🎓 Educación 🎓🎓</h2>
      </div>

      <ExperienceBox data={educationData[0]} />
      {/* <ExperienceBox /> */}

      <div className="myCVSection">
        <h2>👨‍💼👨‍💼 Experiencia Laboral 👨‍💼👨‍💼</h2>
      </div>

      <div className="experienceContainer">
        {/* <ExperienceBox />
        <ExperienceBox />
        <ExperienceBox /> */}
      </div>

      <div className="myCVSection">
        <h2>⚡⚡ Proyectos ⚡⚡</h2>
      </div>
      {/* <ExperienceBox /> */}

      <div className="myCVSection">
        <h2>🔥🔥 Formacion Continua 🔥🔥</h2>
      </div>
      {/* <ToolsBox></ToolsBox> */}

      <div className="myCVSection">
        <h2>🧰🧰 Lenguajes y herramientas de trabajo 🧰🧰</h2>
      </div>

      <div className="ToolsContainer">
        {/* <ToolsBox></ToolsBox>
        <ToolsBox></ToolsBox>
        <ToolsBox></ToolsBox>
        <ToolsBox></ToolsBox>
        <ToolsBox></ToolsBox>
        <ToolsBox></ToolsBox>
        <ToolsBox></ToolsBox> */}
      </div>
    </div>
  );
};

export default MyCvContainer;
