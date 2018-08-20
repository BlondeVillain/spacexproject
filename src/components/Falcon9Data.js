import React, { Component } from 'react';
import axios from 'axios';

export default class Falcon9Data extends Component {
    constructor(){
      super();
      this.state = {
      falcon9specs: {},
      Vehiclename: ["Name: ", "Cost per Launch: ", "Probability of Launch Success: ", "Unfueled Rocket Mass: "],
      Units: ["$", "%","lb"]
      }
    }
      componentDidMount() {
        axios
        .get('/v2/info/falcon9').then(response =>{this.setState({falcon9specs: response.data}, console.log(response.data))})
        .catch(err => console.log("Now ya fucked up."))}
        render() {

          var descriptor = this.state.Vehiclename;
          var unit = this.state.Units;
          console.log(this.state.falcon9specs)
          return (
            <div>
              <link href= "Falcon9Style.css" rel="stylesheet"/>
              <header>
              <p>{descriptor[0]}{this.state.falcon9specs && this.state.falcon9specs.name}</p>
              <p>{descriptor[1]}{unit[0]}{this.state.falcon9specs && this.state.falcon9specs.cost_per_launch}</p>
              <p>{descriptor[2]}{this.state.falcon9specs && this.state.falcon9specs.success_rate_pct}{unit[1]}</p>
              </header>
            </div>
          )
        }
}