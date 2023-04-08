import React from "react";
import "@styles/containersStyles/projectsCard.scss";

const ProjectsCard = () => {
  return (
    <div className="ProjectsCard">
      <img src="https://freesvg.org/img/1533631532.png" alt="Piano" />
      <div className="ProjectsCardTitle">Titulo</div>
      <div className="ProjectsCardBody">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda.
      </div>
      <div className="ProjectCardBottom">
        JS, HTML, CSS
      </div>
    </div>
  );
};

export default ProjectsCard;
