var express = require('express');
var app = express();

app.param(function(param, option) {
  return function(req, res, next, val) {
    //if (val == option) {
    if (validator(val)) {
      next();
    }
    else {
      res.sendStatus(403);
    }
  }
});

function validator(val) {
  return true;
}

app.param('id', function(candidate){
  return !isNaN(parseFloat(candidate)) && isFinite(candidate);
});
//app.param('id', 1337);

//app.get('/user/:id', function(req, res) {
//  res.send('OK');
//});

app.use('/admin', function(req, res, next) {
  console.log(req.originalUrl);
  console.log(req.baseUrl);
  console.log(req.path);

  console.log('Time: %d', Date.now());
  next();
});

//app.use(function(req, res, next) {
//  res.send("Hello World");
//  next();
//});

//app.get('/', function(req, res) {
//  res.send("Welcome");
//});

app.get('/user/:name', function(req, res, next) {
  console.log(req.params.name);
  next();
})

app.get('/file/*', function(req, res, next) {
  console.log(req.params[0]);
})

app.get('/viewdirectory', require('./mymiddleware.js'));

app.get('/shoes', function(req, res) {
  console.log(req.query.q);
  console.log(req.query.order);
  console.log(req.query.shoe.color);
  console.log(req.query.shoe.type);
})

var greet = express.Router();

greet.get('/jp', function(req, res) {
  console.log(req.baseUrl);
  res.send('Konichiwa');
});

app.use(['/gre+t', '/hel{2}o'], greet);


app.listen(3000, function() {
  console.log('Ready');
});