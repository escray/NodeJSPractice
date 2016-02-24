var express = require('express');
var app = express();
var routes = require('./lib/router.js')(app);

app.use(express.static(__dirname + '/public'));

app.listen(3000);