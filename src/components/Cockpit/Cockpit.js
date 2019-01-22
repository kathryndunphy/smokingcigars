import React from "react";

import classes from "./Cockpit.css";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = "";

  if (props.showCigars) {
    btnClass = classes.Red;
  }
  if (props.cigars.length <= 10) {
    assignedClasses.push(classes.red);
  }
  if (props.cigars.length <= 20) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>Cigar Shop</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Cigars. Are we a new Cigar?
      </button>
    </div>
  );
};

export default cockpit;
