import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

export default class BFRData extends Component {
    constructor(){
      super();
      this.state = {
      rocketspec2: {}
      }
    }
        componentDidMount() {
        axios
        .get('/v2/info/bfr').then(response =>{this.setState({rocketspec2: response.data}, console.log(response.data))})
        .catch(err => console.log("You have fucked up now."))}
}