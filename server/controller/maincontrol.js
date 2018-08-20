const axios = require('axios');
var rockets = [];
// axios
//   .get('https://api.spacexdata.com/v2/info/roadster')
//   .then(response => {
//     // console.log(response)
//     return data = response.data
//   })
//app.post('/v2/info/falcon1', maincontrol.postFalcon1specs);
//chang success_rate_pct;


const putFalcon1specs = (req, res, next) => {
  let {success_rate_pct} = req.body;
  console.log(req.body, 'body')
  rockets[3].success_rate_pct = parseInt(success_rate_pct);
}


  const getFalcon1specs = (req, res, next) => {
axios
    .get('https://api.spacexdata.com/v2/rockets/falcon1')
    .then(response => {
      console.log(response.data)
      rockets.push(response.data)
      res.status(200).send(rockets)}
    );
    };

    const getRoadsterspecs = (req, res, next) => {
  axios
        .get('https://api.spacexdata.com/v2/info/roadster')
        .then(response => {
          rockets.push(response.data)
          res.status(200).send(rockets)}
        );
        };

  const getFalcon9specs = (req, res, next) => {
axios
    .get('https://api.spacexdata.com/v2/rockets/falcon9')
    .then(response => {
      rockets.push(response.data)
      res.status(200).send(rockets)}
    );
    };

  const getFalconHeavyspecs = (req, res, next) => {
axios
    .get('https://api.spacexdata.com/v2/rockets/falconheavy')
    .then(response => {
      rockets.push(response.data)
      res.status(200).send(rockets)}
    );
    };

  const getBfrspecs = (req, res, next) => {
axios
    .get('https://api.spacexdata.com/v2/rockets/bfr')
    .then(response => {
      rockets.push(response.data)
      res.status(200).send(rockets)}
    );
    };
    
  // const add  = (req, res, next) => {
  //   data.push(req.body);
  //   res.status(200).send(data);
  //   };
    
  module.exports = {
    putFalcon1specs,
    getRoadsterspecs,
    getFalcon1specs,
    getFalcon9specs,
    getFalconHeavyspecs,
    getBfrspecs,
    // addSpecs,

    };