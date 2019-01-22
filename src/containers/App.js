import React, { PureComponent } from "react";
import classes from "./App.css";
// import Cigars from "../components/Cigars/Cigar/Cigar";
import Cigars from "../components/Cigars/Cigars";
import Cockpit from "../components/Cockpit/Cockpit";

//you could do lots of things here to makes things easier

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
      showCigars: false
    };
  }

  componentWillMount() {
    console.log("[App.js] componentWillMount");
  }

  componentDidMount() {
    console.log("[App.js] inside componentDidMount");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[Update App.js] inside shouldComponentUpdate",
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextState.cigars !== this.state.cigars ||
  //     nextState.showCigars !== this.state.showCigars
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[Update App.js] inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("[Update App.js] inside componentDidUpdate");
  }

  // state = {
  //   cigars: [
  //     {
  //       id: "22",
  //       blend: "Blend1-Yarguera Sade",
  //       characteristics: "Characteristics1-Spicy Chocolate"
  //     },
  //     {
  //       id: "23",
  //       blend: "Blend2-San Andres Morron",
  //       characteristics: "Characteristics2-Sweet Cocoa and Walnuts"
  //     },
  //     {
  //       id: "24",
  //       blend: "Blend3-Ecuadorian Sumatra",
  //       characteristics: "Characteristics3-Floral and Spicy"
  //     }
  //   ],
  //   otherState: "some other state no cigar kiddo",
  //   showCigars: false
  // };

  cigarChangeHandler = (event, id) => {
    const cigarIndex = this.state.cigars.findIndex(c => {
      return c.id === id;
    });

    const cigar = {
      ...this.state.cigars[cigarIndex]
    };

    // const cigar = Object.assign({}, this.state.cigar[cigarInex])

    cigar.blend = event.target.value;

    const cigars = [...this.state.cigar];
    cigars[cigarIndex] = cigar;

    this.setState({ cigars: cigars });
  };

  deleteCigarHandler = cigarIndex => {
    // const cigar = this.state.cigar.slice();
    const cigars = [...this.state.cigars];
    cigars.splice(cigarIndex, 1);
    this.setState({ cigars: cigars });
  };

  toggleCigarHandler = () => {
    const doesShow = this.state.showCigars;
    this.setState({ showCigars: !doesShow });
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
      <div className={classes.App}>
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
          clicked={this.toggleCigarHandler}
        />

        {cigars}
      </div>
    );
    // return React.createElement( 'div', {className: 'App'}, React.createElement('h1', null, 'this shit work'));
  }
}

export default App;
