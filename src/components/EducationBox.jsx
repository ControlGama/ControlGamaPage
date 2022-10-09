import React from "react";
import "@styles/componentsStyles/educationBox.scss";

const EducationBox = ({ data }) => {
  return (
    <div className="educationBox">
      <div className="borderEducationBox">
        <div className="leftEducationBox">
          <p>{data.title}</p>
          <br />
          <p>{data.duration}</p>
        </div>
      </div>
      <div className="borderEducationBox">
        <p>{data.subtitle}</p>
        <br />
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default EducationBox;
