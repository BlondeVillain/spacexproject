const axios = require('axios');
var data = [];
axios
  .get('https://api.spacexdata.com/v2/info/roadster').then(response => 
        data.push(...response.data.results))

