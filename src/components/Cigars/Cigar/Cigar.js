import React, { Component } from "react";
import classes from "./Cigar.css";
// import Radium from "radium";

class Cigar extends Component {
  constructor(props) {
    super(props);
    console.log("[Cigar.js] Inside constructor", props);
    
  }

  componentWillMount() {
    console.log("[Cigar.js] componentWillMount");
  }

  componentDidMount() {
    console.log('[Cigar.js] inside componentDidMount')
  }
  

  render () {
    console.log('[Cigar.js] inside render')
    return (
      <div className={classes.Cigar}>
        <p onClick={this.props.click}>
          {" "}
          CIGAR: {this.props.blend} <br /> AROMA: {this.props.characteristics}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.characteristics}
        />
      </div>
    )
  }
}

export default Cigar;
