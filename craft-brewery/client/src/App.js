import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import BreweryDB from './BrewDB';
// import Header from "./components/Header/Header.js";

class App extends Component {
  state = {
    beers: []
  };

  async componentDidMount() {
    const data = await fetch('/api/beers');
    const beers = await data.json();
    this.setState({ beers });
  };

  render() {
    const beers = this.state.beers.map(beer => {
      return <div key={beer.name}>{beer.name}</div>
    });

    return (
      
      <div>
        <div className="App">
          <header className="header"/>
        </div>
        Some Beers from internal API: {beers}
        
        <div>
          <h2>Brewery API Data:</h2>
          {/* <BreweryDB locationZip="76107" /> */}
        </div>
      </div>
      
    );
  }
}

export default App;
