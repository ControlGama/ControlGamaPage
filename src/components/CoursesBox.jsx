import React from "react";
import "@styles/componentsStyles/coursesBox.scss";
import CoursesBoxItem from "@components/CoursesBoxItem.jsx";

const CoursesBox = ({ data }) => {
  return (
    <div className="CoursesBox">
      <div className="CoursesTitle">{data.title}</div>
      <div className="CoursesBody">
        {data.coursesItems.map((item, idex) => {
          return <CoursesBoxItem itemData={item} />;
        })}
      </div>
    </div>
  );
};

export default CoursesBox;
