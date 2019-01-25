import React from "react";

import classes from "./Cockpit.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showCigars) {
    btnClass = [classes.Button, classes.Red].join(" ");
  }
  if (props.cigars.length <= 10) {
    assignedClasses.push(classes.red);
  }
  if (props.cigars.length <= 20) {
    assignedClasses.push(classes.bold);
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>Cigar Shop</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Cigars. Are we a new Cigar?
      </button>
      <button onClick={props.login}>Log in</button>
    </Aux>
  );
};

export default React.memo(cockpit);
