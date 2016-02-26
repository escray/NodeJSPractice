var express = require("express");
require('express-di');

var app = express();
var sub = express();
app.use(sub);

app.factory('people1', function(req, res, next) {
  next(null, {name: "Bob"});
});

app.factory('people2', function(req, res, next) {
  next(null, {name: "Jeff"});
});

sub.factory('children', function(req, res, next) {
  next(null, {name: 'childer'});
})

app.get('/', function(people1, people2, res) {
  res.json({
    from: 'parent',
    people1: people1,
    people2: people2,
    //people3: children,
  });
});

sub.get('/children', function(people1, people2, children, res) {
  res.json({
    from:    'sub',
    people1: people1,
    people2: people2,
    people3: children,
  })
})

app.listen(3000, function() {
  console.log("Dependency Injection...")
})