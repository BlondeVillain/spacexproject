import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {

    roadsterspecs_speed_mph: 0,
    roadsterspecs_distancefromearth_mi: 0,
    roadsterspecs_distancefrommars_mi: 0,

  
    }    
  }

  componentDidMount() {
    axios
    .get('https://api.spacexdata.com/v2/info/roadster')
    axios
    .get('https://api.spacexdata.com/v2/rockets/falconheavy').then(response => {console.log(response)});
    axios
    .get('https://api.spacexdata.com/v2/rockets/falcon1').then(response => {console.log(response)});
    axios
    .get('https://api.spacexdata.com/v2/rockets/falcon9').then(response => {console.log(response)});
    axios
    .get('https://api.spacexdata.com/v2/rockets/bfr').then(response => {console.log(response)});

    // this.setState({ roadsterspecs_speed_mph: response.data }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 roadsterout={this.state.roadsterspecs_speed_mph}/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
