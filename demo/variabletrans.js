var express = require('express');
var app = express();

var middleware1 = function(req, res, next) {
  req.people1 = {name: "Bob"};
  next();
}

var middleware2 = function(req, res, next) {
  req.people2 = {name: "Jeff"};
  next();
};

app.get('/', middleware1, middleware2, function(req, res) {
  res.json({
    people1: req.people1,
    people2: req.people2,
  });
});

app.listen(3000, function() {
  console.log("transfer... ")
})