const fs = require('fs');
const lodash = require('lodash');
const jsonServer = require('json-server');

const port = process.env.PORT || 3005;
const endpoints = [],
  obj = {};
const dbPath = __dirname + '/public/db/';
const files = fs.readdirSync(dbPath);

files.forEach((file) => {
  let filePath = fs.readFileSync(dbPath + file);
  let jsonObject = JSON.parse(filePath);

  Object.keys(jsonObject).forEach(function (idx) {
    endpoints.push(idx);
  });
  lodash.extend(obj, jsonObject);
});

const objOrdered = {};
Object.keys(obj)
  .sort()
  .forEach(function (key) {
    objOrdered[key] = obj[key];
  });

const router = jsonServer.router(objOrdered);

// Express
const app = jsonServer.create();
const middlewares = jsonServer.defaults();
app.use(jsonServer.bodyParser);
app.use(middlewares);
app.use(router);
app.listen(port);

module.exports = app;
