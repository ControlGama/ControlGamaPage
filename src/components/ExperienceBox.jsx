import React from "react";
import "@styles/ExperienceBox.scss";

const ExperienceBox = ({ data }) => {
  return (
    <div className="experienceBox">
      <div className="borderExperienceBox">
        <div className="leftExperienceBox">
          <p>{data.title}</p>
          <br />
          <p>{data.duration}</p>
        </div>
      </div>
      <div className="borderExperienceBox">
        <p>{data.subtitle}</p>
        <br />
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ExperienceBox;
