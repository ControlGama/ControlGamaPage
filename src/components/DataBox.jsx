import React from "react";
import "@styles/DataBox.scss";

const DataBox = ({ data }) => {
  return (
    <section className="green_frame">
      <h2>{data.title}</h2>

      {Array.isArray(data.body)
        ? data.body.map((parrafo,index) => {
            return <p key={`dataBoxP${data.key}${index}`}> {parrafo} </p>;
          })
        : <p key={`dataBoxP${data.key}1`}> { data.body } </p>}
    </section>
  );
};

export default DataBox;
