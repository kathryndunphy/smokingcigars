import React from "react";
import "./Cigar.css";
import Radium from "radium";

const cigar = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };
  return (
    //   <StyleRoot>
    <div className="Cigar" style={style}>
      <p onClick={props.click}>
        {" "}
        CIGAR: {props.blend} <br /> AROMA: {props.characteristics}
      </p>
      <p>{props.children}</p>
      <input
        type="text"
        onChange={props.changed}
        value={props.characteristics}
      />
    </div>
    // </StyleRoot>
  );
};

export default Radium(cigar);
