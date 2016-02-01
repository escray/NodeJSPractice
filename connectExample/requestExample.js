var connect = require('connect');
var qs = require('qs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var str;
connect()
  .use(bodyParser())
  .use(cookieParser())
  .use(session({ secret: "asdf" }))
  .use(function(req,res) {
    str = req.url.split('?')[1];
    res.write("req.url: " + req.url + "\n\n");
    res.write("req.method: " + req.method + "\n\n");
    res.write("req.headers: " + JSON.stringify(req.headers) +"\n\n");
    ;
    res.write("req.query: " + JSON.stringify(qs.parse(str)) + "\n\n");
    res.write("req.body: " + JSON.stringify(req.body) + "\n\n");
    res.write("req.cookies: " + JSON.stringify(req.cookies) + "\n\n");
    res.write("req.session: " + JSON.stringify(req.session));;
    res.end();
  }).listen(3000);