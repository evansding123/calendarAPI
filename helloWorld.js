const express = require('express')
const path = require('path')
const app = express()
const port = 3006
//const router = require('./routes.js');

app.use(express.json());
//app.use(express.static('./dist'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;