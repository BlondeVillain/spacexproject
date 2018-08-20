import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

export default class Falcon1Data extends Component {
    constructor(){
      super();
      this.state = {
      rocketspec3: {},
      }
    }
    
      componentDidMount() {
        axios
        .get('/v2/info/falcon1').then(response =>{this.setState({rocketspec3: response.data}, console.log(response.data))})
        .catch(err => console.log("Now ya fucked up."))}

}