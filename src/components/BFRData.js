import React, { Component } from 'react';
import axios from 'axios';

export default class BFRData extends Component {
    constructor(){
      super();
      this.state = {
      BFRSpecs: {},
      Vehiclename: ["Name: ", "Cost per Launch: ", "Probability of Launch Success: ", "Unfueled Rocket Mass: "],
      Units: ["$", "%","lb"]
      }
    }
        componentDidMount() {
        axios
        .get('/v2/info/bfr').then(response =>{this.setState({BFRspecs: response.data}, console.log(response.data))})
        .catch(err => console.log("Did not retreive data."))}

        
  render() {

    var descriptor = this.state.Vehiclename;
    var unit = this.state.Units;
    console.log(this.state.BFRspecs)
    return (
      <div>
        <link href= "BFRStyle.css" rel="stylesheet"/>
        <header>
        <p>{descriptor[0]}{this.state.BFRspecs && this.state.BFRspecs.name}</p>
        <p>{descriptor[1]}{unit[0]}{this.state.BFRspecs && this.state.BFRspecs.cost_per_launch}</p>
        <p>{descriptor[2]}{this.state.BFRspecs && this.state.BFRspecs.success_rate_pct}{unit[1]}</p>
        </header>
      </div>
    )
  }
}
