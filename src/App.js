import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import './BFRData'
import './Falcon1Data'
import './Falcon9Data'
import './FalconHeavyData'
import './RoadsterData'



class App extends Component {
  constructor(){
    super();
    this.state = {
    helloworld: "Hello World",
    roadsterspecs_speed_mph: [],
    rocketspec1: {},
    rocketspec2: {},
    rocketspec3: {},
    rocketspec4: {},
    rocketspec5: {}
    }
  }

  componentDidMount() {
    axios
    .get('/v2/info/roadster').then(response =>{this.setState({rocketspec1: response.data}, console.log(response.data))})
    .catch(err => console.log("Now ya fucked up."))}

  componentDidMount() {
    axios
    .get('/v2/info/falcon1').then(response =>{this.setState({rocketspec3: response.data}, console.log(response.data))})
    .catch(err => console.log("Now ya fucked up."))}

  componentDidMount() {
    axios
    .get('/v2/info/falcon9').then(response =>{this.setState({rocketspec3: response.data}, console.log(response.data))})
    .catch(err => console.log("Now ya fucked up."))}

  componentDidMount() {
    axios
    .get('/v2/info/falconheavy').then(response =>{this.setState({rocketspec4: response.data}, console.log(response.data))})
    .catch(err => console.log("Now ya fucked up."))}

  componentDidMount() {
    axios
    .get('/v2/info/bfr').then(response =>{this.setState({rocketspec5: response.data}, console.log(response.data))})
    .catch(err => console.log("You have fucked up now."))}

    // fetch('https://api.spacexdata.com/v2/rockets/bfr')
    //  .then(res => res.json()).then(rocketspec1 => this.setState({rocketspec1},
    //     () => console.log("Fetched", rocketspec1)))

    // fetch('/v2/rockets/bfr')
    //   .then(res => res.json()).then(rocketspec1 => this.setState({rocketspec1},
    //   () => console.log("Fetched", rocketspec1)))
  


// => "tobi"

  render() {
    console.log(this.state.rocketspec1)
    console.log(this.state.rocketspec2)
    console.log(this.state.rocketspec3)
    console.log(this.state.rocketspec4)
    console.log(this.state.rocketspec5)
    // if(!this.state.rocketspec1) return<p>Loading...</p>
    // let fuckoff2 = "Test me in the DOM and fuck off."
    // var fuckoff = this.setState.helloworld = "Fuck Off World"
    return (
      <div className="App">
        <header className="App-header">
        {this.state.helloworld}
        <p>{this.state.rocketspec1 && this.state.rocketspec1.name}</p>
        <br/>
    <p>{this.state.rocketspec2 && this.state.rocketspec2.name}</p>

        {/* {this.state.rocketspec1} */}
        <br/>
    
        {/* {this.props.fuckoff2} */}
        {/* {fuckoff2} */}
        {/* <div friendlymessage = {fuckoff2}/> */}
        </header>
      </div>
    );
  }
}

export default App;
