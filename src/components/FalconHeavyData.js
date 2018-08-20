import React, { Component } from 'react';
import axios from 'axios';

export default class FalconHeavyData extends Component {
    constructor(){
      super();
      this.state = {
        falconheavyspecs: {},
        Vehiclename: ["Name: ", "Cost per Launch: ", "Probability of Launch Success: ", "Unfueled Rocket Mass: "],
        Units: ["$", "%","lb"]
      }
    }
        componentDidMount() {
        axios
        .get('/v2/info/falconheavy').then(response =>{this.setState({falconheavyspecs: response.data}, console.log(response.data))})
        .catch(err => console.log("Now ya fucked up."))}
        render() {

          var descriptor = this.state.Vehiclename;
          var unit = this.state.Units;
          console.log(this.state.falconheavyspecs)
          return (
            <div>
              <link href= "FalconHeavyData.css" rel="stylesheet"/>
              <header>
              <p>{descriptor[0]}{this.state.falconheavyspecs && this.state.falconheavyspecs.name}</p>
              <p>{descriptor[1]}{unit[0]}{this.state.falconheavyspecs && this.state.falconheavyspecs.cost_per_launch}</p>
              <p>{descriptor[2]}{this.state.falconheavyspecs && this.state.falconheavyspecs.success_rate_pct}{unit[1]}</p>
              </header>
            </div>
          )
        }
}