import React from "react";
import '@styles/DataBox.scss'; 

const DataBox = ({data}) => {
  return (
      <section className="green_frame">
        <h2>{data.title}</h2>
        <p>
            {data.body}
        </p>
      </section>
  );
};

export default DataBox;
