import React from "react";
import "@styles/componentsStyles/coursesBox.scss";
import CoursesBoxItem from "@components/coursesBoxItem.jsx";

const CoursesBox = ({ data }) => {
  return (
    <div className="CoursesBox">
      <div className="CoursesTitle">{data.title}</div>
      <div className="CoursesBody">
        {data.coursesItems.map((item, index) => {
          return <CoursesBoxItem key={`coursesItems${data.Key}${index}`} itemData={item} />;
        })}
      </div>
    </div>
  );
};

export default CoursesBox;
