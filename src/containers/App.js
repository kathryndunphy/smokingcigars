import React, { Component } from "react";
import classes from "./App.css";
// import Radium, { StyleRoot } from 'radium';
import Cigar from "../components/Cigars/Cigar/Cigar";


//you could do lots of things here to makes things easier

class App extends Component {
  state = {
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

  // switchCigarHandler = (newCigar)=> {
  //   this.setState({
  //     cigar: [
  //     { blend: newCigar, characteristics: 'Characteristics1-Spicy Chocolate' },
  //     { blend: 'Blend4-Connecticut Broadleaf', characteristics: 'Characteristics4-Caramel Hay'},
  //     { blend: 'Blend3-Ecuadorian Sumatra', characteristics: 'Characteristics3-Floral and Spicy' }
  //     ]
  //   });
  // }

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
    let cigars = null;
    let btnClass = "";

    if (this.state.showCigars) {
      cigars = (
        <div>
          {this.state.cigars.map((cigar, index) => {
            return (
              <Cigar
                click={() => this.deleteCigarHandler(index)}
                blend={cigar.blend}
                characteristics={cigar.characteristics}
                key={cigar.id}
                changed={event => this.cigarChangeHandler(event, cigar.id)}
              />
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }
    const assignedClasses = [];

    if (this.state.cigars.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.cigars.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      // <StyleRoot>
      <div className={classes.App}>
        <h1>Brasas Tejas Humidor</h1>
        <p className={assignedClasses.join(" ")}>Cigar Shop</p>
        <button className={btnClass} onClick={this.toggleCigarHandler}>
          Are we a new Cigar?
        </button>

        {cigars}
      </div>
      // </StyleRoot>
    );
    // return React.createElement( 'div', {className: 'App'}, React.createElement('h1', null, 'this shit work'));
  }
}

export default App;
