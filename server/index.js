const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const port = 3001;
const app = express();
const maincontrol = require(__dirname + '/server/controller/maincontrol.js')
app.listen(port,() => {console.log({port})})