import React, { useState, useEffect, useRef } from "react";
import "@styles/componentsStyles/coursesBox.scss";
import CoursesBoxItem from "@components/coursesBoxItem.jsx";
import { DownCircleFilled } from "@ant-design/icons";

const CoursesBox = ({ data }) => {
  const texts_CoursesBoxItem = data.texts_CoursesBoxItem;
  const [hiddenBox, setHiddenBox] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    el?.style.setProperty("display", hiddenBox ? "none" : "flex");
  }, [hiddenBox]);

  return (
    <div className="CoursesBox">
      <div className="CoursesTitle" onClick={() => setHiddenBox(!hiddenBox)}>
        <span>
          <DownCircleFilled />
        </span>
        {data.item.title}
      </div>
      <div className="CoursesBody" ref={ref}>
        {data.item.coursesItems.map((item, index) => {
          return (
            <CoursesBoxItem
              key={`coursesItems${data.item.Key}${index}`}
              itemData={{ item, texts_CoursesBoxItem }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CoursesBox;
