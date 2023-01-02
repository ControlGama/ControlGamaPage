import React from "react";
import "@styles/componentsStyles/coursesBoxItem.scss";

const CoursesBoxItem = ({ itemData }) => {
  const platzi_link = "https://platzi.com";
  const entity = `${itemData.texts_CoursesBoxItem.entity}: ${itemData.item.entity}`;

  const stringDate =
    itemData.item.expedition.substr(8, 2) + "-" +
    itemData.item.expedition.substr(5, 2) + "-" +
    itemData.item.expedition.substr(0, 4);

  const expedition = `${itemData.texts_CoursesBoxItem.expedition_date}: ${stringDate}`;

  return (
    <div className="CoursesBoxItem">
      <a href={`${platzi_link}${itemData.item.diploma_link}`} target="_blank">
        <div className="CoursesItem">
          <p>{itemData.item.courseName}</p>
          <p>{entity}</p>
          <p>{expedition}</p>
        </div>
      </a>
    </div>
  );
};

export default CoursesBoxItem;
