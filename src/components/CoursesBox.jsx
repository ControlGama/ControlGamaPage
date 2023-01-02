import React from "react";
import "@styles/componentsStyles/coursesBox.scss";
import CoursesBoxItem from "@components/coursesBoxItem.jsx";

const CoursesBox = ({ data }) => {
  
  const texts_CoursesBoxItem = data.texts_CoursesBoxItem; 
  return (
    <div className="CoursesBox">
      <div className="CoursesTitle">{data.item.title}</div>
      <div className="CoursesBody">
        {data.item.coursesItems.map((item, index) => {
          return <CoursesBoxItem key={`coursesItems${data.item.Key}${index}`} itemData={{item,texts_CoursesBoxItem}} />;
        })}
      </div>
    </div>
  );
};

export default CoursesBox;
