import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Cigar.css";

import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import { AuthContext } from "../../../containers/App";

class Cigar extends Component {
  constructor(props) {
    super(props);
    console.log("[Cigar.js] Inside constructor", props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Cigar.js] componentWillMount");
  }

  componentDidMount() {
    console.log("[Cigar.js] inside componentDidMount");
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log("[Cigar.js] inside render");
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => (auth ? <p>I'm authenticated! Viva Maduros!</p> : null)}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          CIGAR: {this.props.blend} <br /> AROMA: {this.props.characteristics}
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.characteristics}
        />
      </Aux>
    );
  }
}

Cigar.propTypes = {
  click: PropTypes.func,
  blend: PropTypes.string,
  characteristics: PropTypes.string,
  changed: PropTypes.func
};

export default withClass(Cigar, classes.Cigar);
