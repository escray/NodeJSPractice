// httpresponse.js
var http = require('http');
var req = http.get({host: 'www.byvoid.com'});
req.on('response', funcion(res){
    res.setEncoding('utf8');
    res.on('data', function(data){
        console.log(data);
    });
});
