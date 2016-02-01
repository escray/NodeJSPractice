// httpserverrequestget.js
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain', 'Content-Length': "hello\nworld\n".length});
    // res.writeHead('Content-Length': 100);
    //res.write(util.inspect(url.parse(req.url, true)));
    //res.write("\n");
    res.write("hello\n");

    setTimeout(function() {
      res.end("world\n");
    }, 2000);

}).listen(3000);

console.log("listen localhost:3000");
