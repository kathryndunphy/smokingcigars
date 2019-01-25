import React, { PureComponent } from "react";

import Cigar from "./Cigar/Cigar";

class Cigars extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Cigars.js] Inside constructor", props);
    this.lastCigarRef = React.createRef();
  }

  componentWillMount() {
    console.log("[Cigars.js] componentWillMount");
  }

  componentDidMount() {
    console.log("[Cigars.js] inside componentDidMount");
    this.lastCigarRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "[Update Cigars.js] inside componentWillReceiveProps",
      nextProps
    );
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[Update Cigar.js] inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("[Update Cigar.js] inside componentDidUpdate");
  }

  render() {
    console.log("[Cigars.js] inside render");
    return this.props.cigars.map((cigar, index) => {
      return (
        <Cigar
          click={() => this.props.clicked(index)}
          blend={cigar.blend}
          position={index}
          characteristics={cigar.characteristics}
          ref={this.lastCigarRef}
          key={cigar.id}
          changed={event => this.props.changed(event, cigar.id)}
        />
      );
    });
  }
}

export default Cigars;
