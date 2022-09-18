import React from "react";
import "@styles/ExperienceBox.scss";

const ExperienceBox = ({ data }) => {
  return (
    <div className="experienceBox">
      <div className="borderExperienceBox logo-unal">
        <div>{data.title}</div>
      </div>
      <div className="borderExperienceBox">{data.body}</div>
    </div>
  );
};

export default ExperienceBox;
