var connect = require('connect');
var logger = require('./conn.js');
var morgan = require('morgan');
var serveStatic = require('serve-static')

connect().use(morgan())
        .use(serveStatic(__dirname + '/public'))
        .listen(4000);