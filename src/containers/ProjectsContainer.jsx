import React from "react";
import ProjectsCard from "@containers/ProjectsCard";
import "@styles/containersStyles/projectsContainer.scss";

const ProjectsContainer = () => {
  return (
    <div className="ProjectsContainer">
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
    </div>
  );
};

export default ProjectsContainer;
