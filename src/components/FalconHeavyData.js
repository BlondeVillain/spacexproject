import React, { Component } from 'react';
import axios from 'axios';

export default class FalconHeavyData extends Component {
    constructor(){
      super();
      this.state = {
        rocket: [],
        Vehiclename: ["Name: ", "Cost per Launch: ", "Probability of Launch Success: ", "Unfueled Rocket Mass: "],
        Units: ["$", "%","lb"],
        correctedstat: null
      }
    }
    
    putFalcon1specs(correctedpct){
      axios.put('/v2/info/falcon1', {success_rate_pct: correctedpct}).then(res =>{
        this.setState({rocket: res.data})
      })
    }

    correctedFn(e){this.setState({correctedstat: e})}


        componentDidMount() {
        axios
        .get('/v2/info/falconheavy').then(response =>{this.setState({rocket: response.data}, console.log(response.data))})
        .catch(err => console.log("Now ya fucked up."))}
        render() {

          var descriptor = this.state.Vehiclename;
          var unit = this.state.Units;
          console.log(this.state.correctedstat)
          return (
            <div>
              <link href= "FalconHeavyData.css" rel="stylesheet"/>
              <header>
              <p>{descriptor[0]}{this.state.rocket[3] && this.state.rocket[3].name}</p>
              <p>{descriptor[1]}{unit[0]}{this.state.rocket[3] && this.state.rocket[3].cost_per_launch}</p>
              <p>{descriptor[2]}{this.state.rocket[3] && this.state.rocket[3].success_rate_pct}{unit[1]}</p>
              <input onChange = {((e => this.correctedFn(e.target.value)))} />
              <br/>
              <button onClick = {((e => this.putFalcon1specs(this.state.correctedstat)))}/>
              </header>
            </div>
          )
        }
}