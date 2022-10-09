import React from "react";
import "@styles/componentsStyles/experienceBox.scss";

const ExperienceBox = ({ data }) => {
  return (
    <div className="experienceBox">
      
      <div className="borderExperienceBox head1">
        <div className="leftExperienceBox">
          <p>{data.title}</p>
          <br />
          <p>{data.duration}</p>
        </div>
      </div>

      <div className="borderExperienceBox head2">
        <p>{data.subtitle}</p>
        <br />
        <p>{data.description}</p>
      </div>

      <div className="borderExperienceBox body">
        {data.projects.map((item, index) => {
          return (
            <div key={`dataProjets${item.key}${index}`}>
              <p>{item.proyectName}</p>
              <p>{item.rol}</p>
              <p>{item.description}</p>
              <br />
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default ExperienceBox;
