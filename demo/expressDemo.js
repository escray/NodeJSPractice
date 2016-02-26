var express = require('express');
var app = express();
var admin = express();

admin.get('/', function(req, res) {
  console.log(admin.mountpath);
  res.send('Admin Homepage');
});

//admin.on('mount', function(parent){
//  console.log('Admin Mounted');
//  console.log(parent);
//});

var secret = express();
secret.get('/', function(req, res) {
  console.log(secret.mountpath);
  res.send("Admin Secret");
})

admin.use('/secr*t', secret);
app.use(['/adm*n', '/manager'], admin);

app.get('/', function(req, res) {
  console.log(app.mountpath);
  res.send('Homepage');
})

app.param('id', function(req, res, next, id) {
  console.log('CALLED ONLY ONCE');
  next();
});

app.get('/user/:id', function(req, res, next) {
  console.log('although this matches');
  next();
});

app.get('/user/:id', function(req, res) {
  console.log('and this matches too');
  res.end();
})

app.param(['id', 'page'], function(req, res, next, value) {
  console.log('CALLED ONLY ONCE with ', value);
  next();
});

app.get('/user/:id/:page', function(req, res, next) {
  console.log('although this matches');
  next();
});

app.get('/user/:id/:page', function(req, res) {
  console.log('and this matches too');
  res.end();
});


app.listen(3000);