var fs = require('fs');
var net = require('net');

var localFile = fs.createWriteStream('localFile.tmp');


//net.connect('192.168.1.11', 12345, function(client) {
//    process.stdin.pipe(client);
//    process.stdin.piple(localFile);
//});

var zlib = require('zlib');

process.stdin.pipe(zlib.createGunzip()).pipe(fs.createWriteStream('localFile.tar'));
