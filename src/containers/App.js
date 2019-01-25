import React, { PureComponent } from "react";
import classes from "./App.css";
// import Cigars from "../components/Cigars/Cigar/Cigar";
import Cigars from "../components/Cigars/Cigars";
import Cockpit from "../components/Cockpit/Cockpit";

import withClass from "../hoc/withClass";
import Aux from "../hoc/Auxiliary/Auxiliary";

//you could do lots of things here to makes things easier

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside constructor", props);
    this.state = {
      cigars: [
        {
          id: "22",
          blend: "Blend1-Yarguera Sade",
          characteristics: "Characteristics1-Spicy Chocolate"
        },
        {
          id: "23",
          blend: "Blend2-San Andres Morron",
          characteristics: "Characteristics2-Sweet Cocoa and Walnuts"
        },
        {
          id: "24",
          blend: "Blend3-Ecuadorian Sumatra",
          characteristics: "Characteristics3-Floral and Spicy"
        }
      ],
      otherState: "some other state no cigar kiddo",
      showCigars: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount() {
    console.log("[App.js] componentWillMount");
  }

  componentDidMount() {
    console.log("[App.js] inside componentDidMount");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[Update App.js] inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "[Update App.js] inside getDerivedStateFromProps",
      nextProps,
      prevState
    );
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log("[Update App.js] inside getSnapshotBeforeUpdate");
  }

  componentDidUpdate(_nextProps, _nextState) {
    console.log("[Update App.js] inside componentDidUpdate");
  }

  cigarChangeHandler = (event, id) => {
    const cigarIndex = this.state.cigars.findIndex(c => {
      return c.id === id;
    });

    const cigar = {
      ...this.state.cigars[cigarIndex]
    };

    cigar.blend = event.target.value;

    const cigars = [...this.state.cigar];
    cigars[cigarIndex] = cigar;

    this.setState({ cigars: cigars });
  };

  deleteCigarHandler = cigarIndex => {
    const cigars = [...this.state.cigars];
    cigars.splice(cigarIndex, 1);
    this.setState({ cigars: cigars });
  };

  toggleCigarHandler = () => {
    const doesShow = this.state.showCigars;
    this.setState((prevState, props) => {
      return {
        showCigars: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[Apps.js] inside render");
    let cigars = null;

    if (this.state.showCigars) {
      cigars = (
        <Cigars
          cigars={this.state.cigars}
          clicked={this.deleteCigarHandler}
          changed={this.cigarChangeHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCigars: true });
          }}
        >
          Show Cigars
        </button>
        <Cockpit
          appTitle={this.props.title}
          showCigars={this.state.showCigars}
          cigars={this.state.cigars}
          login={this.loginHandler}
          clicked={this.toggleCigarHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {cigars}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
