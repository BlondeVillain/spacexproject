import React, { Component } from 'react';
import axios from 'axios';

export default class Falcon1Data extends Component {
    constructor(){
      super();
      this.state = {
      Vehiclename: ["Name: ", "Cost per Launch: ", "Probability of Launch Success: ", "Unfueled Rocket Mass: "],
      Units: ["$", "%","lb"],
      correctedstat: 0,
      rocket: 0
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
      .get('/v2/info/falcon1').then(response =>{this.setState({rocket: response.data}, console.log(response.data))})
      .catch(err => console.log("Now ya fucked up."))}
   
        render() {

          var descriptor = this.state.Vehiclename;
          var unit = this.state.Units;
          console.log(this.state.rocket)
          return (
            <div>
              <link href= "Falcon1Style.css" rel="stylesheet"/>
              <header>
              <p>{this.state.falcon1values}</p>>
              <p>{descriptor[0]}{this.state.rocket[0] && this.state.rocket[0].name}</p>
              <p>{descriptor[0]}{unit[0]}{this.state.rocket[0] && this.state.rocket[0].cost_per_launch}</p>
              <p>{descriptor[2]}{this.state.rocket[0] && this.state.rocket[0].success_rate_pct}{unit[1]}</p>




              <input onChange = {((e => this.correctedFn(e.target.value)))} />
              </header>
            </div>
          )
        }
      }