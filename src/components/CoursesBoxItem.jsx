import React from "react";
import "@styles/componentsStyles/coursesBoxItem.scss";

const CoursesBoxItem = ({ itemData }) => {
  return (
    <div className="CoursesBoxItem">
      <a href={itemData.link} target="_blank">
        <div className="CoursesItem">
          <p>{itemData.courseName}</p>
          <p>{itemData.entity}</p>
          <p>{itemData.expedition}</p>
        </div>
      </a>
    </div>
  );
};

export default CoursesBoxItem;
