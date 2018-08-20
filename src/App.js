import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Falcon1Data from './components/Falcon1Data';
import Falcon9Data from './components/Falcon9Data';
import FalconHeavyData from './components/FalconHeavyData';
import BFRData from './components/BFRData';
import RoadsterData from './components/RoadsterData';
import Header from './components/Header';

export default class App extends Component {
  constructor(){
    super();
    this.state = {//<<<CONSOLE TEST DATA
    helloworld: "Sup, World!",
    Vehiclename: ["Name: ", "Cost per Launch: ", "Probability of Launch Success: ", "Unfueled Rocket Mass: "],
    Units: ["$", "%","lb"],
    testspecs: {}//<<<PROP TEST DATA
    }
  }



  componentDidMount() {
    axios
    .get('/v2/info/bfr')//<<<GET TEST DATA
    .then(response =>{this.setState({testspecs: response.data}, console.log(response.data))})//<<<STATED TEST DATA
    .catch(err => console.log("You have fucked up now."))}//<<<ERROR TEST DATA



    render() {
    console.log(this.state.testspecs)//<<<CONSOLE TEST DATA
    return (
    <body>
    <main>
    <link href= "App.css" rel="stylesheet"/>
      <div className="App">
        <header className="App-header">
            <Header/>
             <br/>
            <BFRData/>
              <br/>
            <Falcon1Data/>
              <br/>
            <Falcon9Data/>
              <br/>
            <FalconHeavyData/>
              <br/>
            <FalconHeavyData/>
              <br/>
            <RoadsterData/>
        </header>
      </div>
      </main>
      </body>

    )
  }
}