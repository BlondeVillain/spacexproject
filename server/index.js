const express = require('express');
const {json} = require('body-parser');
const port = 3001;
const app = express();
const maincontrol = require(__dirname + '/controller/maincontrol.js')

app.get('/v2/info/roadster', maincontrol.getRoadsterspecs);
app.get('/v2/info/falcon1', maincontrol.getFalcon1specs);
app.get('/v2/info/falcon9', maincontrol.getFalcon9specs);
app.get('/v2/info/falconheavy', maincontrol.getFalconHeavyspecs);
app.get('/v2/info/bfr', maincontrol.getBfrspecs);

app.listen(port, function (){console.log(`Listening on port: ${port} `)})

