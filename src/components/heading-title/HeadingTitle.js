import React from "react";

const HeadingTitle = ({title}) => {
  return (
    <div style={{marginRight: "20px", marginTop: "40px"}}>
        <h2 style={{color: "var(--primary-color)"}}>{title}</h2>
    </div>
  );
};

export default HeadingTitle;
