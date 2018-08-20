import React, { Component } from 'react';
import axios from 'axios';

export default class RoadsterData extends Component {
    constructor(){
      super();
      this.state = {
      roadsterspecs: {},
      Vehiclename: ["Name: ", "Distance from Earth: ", "Distance from Mars: ", "Speed: "],
      Units: [" mi"," mph"]
      }
    }
        componentDidMount() {
        axios
        .get('/v2/info/roadster').then(response =>{this.setState({roadsterspecs: response.data}, console.log(response.data))})
        .catch(err => console.log("Now ya fucked up."))}
        render() {

          var descriptor = this.state.Vehiclename;
          var unit = this.state.Units;
          console.log(this.state.roadsterspecs)
          return (
            <div>
              <link href= "RoadsterStyle.css" rel="stylesheet"/>
              <header>
              <p>{descriptor[0]}{this.state.roadsterspecs && this.state.roadsterspecs.name}</p>
              <p>{descriptor[1]}{this.state.roadsterspecs && this.state.roadsterspecs.earth_distance_mi}{unit[0]}</p>
              <p>{descriptor[2]}{this.state.roadsterspecs && this.state.roadsterspecs.mars_distance_mi}{unit[0]}</p>
              <p>{descriptor[3]}{this.state.roadsterspecs && this.state.roadsterspecs.speed_mph}{unit[1]}</p>
              </header>
            </div>
          )
        }
}