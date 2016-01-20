var fs = require('fs');

//fs.readFile('content.txt', function(err, data){
fs.readFile('content1.txt', 'utf-8', function(err, data){
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
