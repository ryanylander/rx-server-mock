var express = require('express');
const fs = require('fs');
var port = process.env.PORT || 3001;
var app = express();

const dbPath = '/home/ec2-user/express-service/public/db/';
const pharmacies = JSON.parse(fs.readFileSync(`${dbPath}/pharmacies.json`));

app.get('/', function(req, res) {
  res.json("RX App Mock Server");
});

app.get('/pharmacies', function(req, res) {
  res.json(pharmacies.pharmacies);
});

app.get('/pharmacies/ba5629ef-0dfb-40b9-aa09-664a8e2cdfb5', function(req, res) {
  res.json(pharmacies.pharmacies[0]);
});

app.listen(port);
module.exports = app;
