import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

export default class Falcon9Data extends Component {
    constructor(){
      super();
      this.state = {
      rocketspec4: {},
      }
    }
      componentDidMount() {
        axios
        .get('/v2/info/falcon9').then(response =>{this.setState({rocketspec4: response.data}, console.log(response.data))})
        .catch(err => console.log("Now ya fucked up."))}
}