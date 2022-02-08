const express = require('express')
const path = require('path')
const app = express()
const port = 3006
const router = require('./routes.js');

app.use(express.json());
//app.use(express.static('./dist'));
app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//need to get a list of all doctors, get a list of appointments from docotor, delete existing apppt from doctor, add a new appt

//need to first write the http requests, work on database later

module.exports = app;