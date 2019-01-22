import React from "react";
import classes from './Cigar.css';
// import Radium from "radium";

const cigar = props => {
 
  return (
    
    <div className={classes.Cigar}>
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
   
  );
};

export default cigar;
