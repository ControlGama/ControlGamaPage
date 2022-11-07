import React from "react";
import "@styles/componentsStyles/coursesBoxItem.scss";

const CoursesBoxItem = ({ itemData }) => {

  const platzi_link = 'https://platzi.com';

  return (
    <div className="CoursesBoxItem">
      <a href={`${platzi_link}${itemData.diploma_link}`} target="_blank">
        <div className="CoursesItem">
          <p>{itemData.courseName}</p>
          <p>{itemData.entity}</p>
          <p>{itemData.expedition.substr(0,4)}</p>
        </div>
      </a>
    </div>
  );
};

export default CoursesBoxItem;
