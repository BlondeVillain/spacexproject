import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

export default class FalconHeavyData extends Component {
    constructor(){
      super();
      this.state = {
      rocketspec5: {}
      }
    }
        componentDidMount() {
        axios
        .get('/v2/info/falconheavy').then(response =>{this.setState({rocketspec5: response.data}, console.log(response.data))})
        .catch(err => console.log("Now ya fucked up."))}
}