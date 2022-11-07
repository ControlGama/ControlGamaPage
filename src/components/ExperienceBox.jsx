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
        Mis responsabilidades en la empresa:
        <br />
        <br />
        <ul>
          {data.responsibilities.map((item, index) => {
            return (
              <li key={`dataProjets${data.key}${index}`}>{item}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceBox;
