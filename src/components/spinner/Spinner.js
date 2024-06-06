import React from "react";
import { RingLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="spinner" style={{height: "calc(100vh - 150px)" , display: "flex", justifyContent: "center", alignItems: "center"}}>
        <RingLoader color="#2c3e50" />
    </div>
  );
};

export default Spinner;
