var http = require('http');
var querystring = require('querystring');

http.createServer(function(req, res){
    var postData = '';
    req.setEncoding('utf8');
    req.on('data', function(trunk){
        postData += trunk;
    });
    req.on('end', function(){
        res.end(postData);
    });
    res.write('Hello');
}).listen(8080);
console.log('webserver start complete');
