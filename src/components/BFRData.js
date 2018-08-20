import React, { Component } from 'react';
import axios from 'axios';

export default class BFRData extends Component {
    constructor(){
      super();
      this.state = {
      rocket: {},
      Vehiclename: ["Name: ", "Cost per Launch: ", "Probability of Launch Success: ", "Unfueled Rocket Mass: "],
      Units: ["$", "%","lb"]
      }
    }

    putFalcon1specs(correctedpct){
      axios.put('/v2/info/falcon1', correctedpct).then(res =>{
        this.setState({rocket: res.data})
      })
    }

    correctedFn(e){this.setState({correctedstat: e})}

        componentDidMount() {
        axios
        .get('/v2/info/bfr').then(response =>{this.setState({rocket: response.data}, console.log(response.data))})
        .catch(err => console.log("Did not retreive data."))}

        
  render() {

    var descriptor = this.state.Vehiclename;
    var unit = this.state.Units;
    console.log(this.state.rocket)
    return (
      <div>
        <link href= "BFRStyle.css" rel="stylesheet"/>
        <header>
        <p>{descriptor[0]}{this.state.rocket[2] && this.state.rocket[2].name}</p>
        <p>{descriptor[1]}{unit[0]}{this.state.rocket[2] && this.state.rocket[2].cost_per_launch}</p>
        <p>{descriptor[2]}{this.state.rocket[2] && this.state.rocket[2].success_rate_pct}{unit[1]}</p>
        <input onChange = {((e => this.correctedFn(e.target.value)))} />
        </header>
      </div>
    )
  }
}
