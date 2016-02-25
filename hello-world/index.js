var express = require('express');
var app = express();
//var routes = require('./lib/router.js')(app);

app.use(express.static(__dirname + '/public'));
//app.use("/", function(req, res, next) {
  //console.log("in come a " + req.method + " to " + req.url);
  //next();
  //res.writeHead(200, {"Content-Type": "text/plain"});
  //res.end("Hello world!");
  //next();
//});

//app.use("/home", function(req, res, next) {
//  res.writeHead(200, {"Content-Type": "text/plain"});
//  res.end("Welcome to the homepage!\n");
//});
//
//app.use("/about", function(req, res, next) {
//  res.writeHead(200, {"Content-Type": "text/plain"});
//  res.end("Welcome to the about page!\n");
//});
//
//app.use(function(req, res) {
//  res.writeHead(404, {"Content-Type": "text/plain"});
//  res.end("404 error!\n");
//});

app.all("*", function(req, res, next) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  next();
})

app.get("/", function(req, res) {
  res.end("Welcome to the homepage!");
});

app.get("/about", function(req, res) {
  res.end("Welcome to the about page!");
});

app.get("/hello/:who?", function(req, res) {
  if (req.params.who) {
    res.end("Hello, " + req.params.who  + ".");
  } else {
    res.end("Hello, Guest.");
  }
});

app.get('/forum/:fid/thread/:tid', function(req, res){
  res.end("/forum/" + req.params.fid + "/thread/" + req.params.tid);
});

app.get(/^\/commits\/(\w+)(?:\.\.(\w+))?$/, function(req, res) {
  var from = req.params[0];
  var to = req.params[1] || 'HEAD';
  res.end('commit range ' + from + '..' + to);
});

app.get("*", function(req, res) {
  res.end("404!");
})

console.log("start...");
app.listen(1337);