import React from "react";
import "@styles/componentsStyles/toolsBox.scss";

const ToolsBox = ({ data }) => {
  return (
    <div className="toolsBox">
      <div className="headerToolsBox">
        <div className="headerToolsLogo">{<data.icon />}</div>
        <div className="headerToolsTitle">{data.title}</div>
      </div>
      {data.description.map((item, index) => {
        return (
          <div key={`educationDataDiv${data.Key}${index}`} className="bodyToolsBox">{item}</div>    
        );
      })}      

    </div>
  );
};

export default ToolsBox;
