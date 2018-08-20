const axios = require('axios');
var data = [];

// axios
//   .get('https://api.spacexdata.com/v2/info/roadster')
//   .then(response => {
//     // console.log(response)
//     return data = response.data
//   })

  const getRoadsterspecs = (req, res, next) => {
axios
    .get('https://api.spacexdata.com/v2/info/roadster')
    .then(response => {
      console.log(response.data)
      res.status(200).send(response.data)}
    );
    };

  const getFalcon1specs = (req, res, next) => {
axios
    .get('https://api.spacexdata.com/v2/rockets/falcon1')
    .then(response => {
      console.log(response.data)
      res.status(200).send(response.data)}
    );
    };

  const getFalcon9specs = (req, res, next) => {
axios
    .get('https://api.spacexdata.com/v2/rockets/falcon9')
    .then(response => {
      console.log(response.data)
      res.status(200).send(response.data)}
    );
    };

  const getFalconHeavyspecs = (req, res, next) => {
axios
    .get('https://api.spacexdata.com/v2/rockets/falconheavy')
    .then(response => {
      console.log(response.data)
      res.status(200).send(response.data)}
    );
    };

  const getBfrspecs = (req, res, next) => {
axios
    .get('https://api.spacexdata.com/v2/rockets/bfr')
    .then(response => {
      console.log(response.data)
      res.status(200).send(response.data)}
    );
    };
  module.exports = {
    getRoadsterspecs,
    getFalcon1specs,
    getFalcon9specs,
    getFalconHeavyspecs,
    getBfrspecs,
    };