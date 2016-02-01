/*
var body = 'hello, world';
reponse.writeHead(200, {
  'Content-Length': body.length,
  'Content-Type': 'text/plain'
});
*/

var connect = require('connect');

connect()
  .use(function(req, res) {
    var accept = req.headers.accept.split(","),
        body, type;
    console.log(accept);
    if(accept.indexOf("application/json") > -1) {
      type = "application/json";
      body = JSON.stringify({ message: "hello" });      
    } else if (accept.indexOf("text/html") > -1) {
      type = "text/html";
      body = "<h1>Hello!</h1>";
    } else {
      type = "text/plain";
      body = "hello!";
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", type);
    res.end(body);
  }).listen(3000);