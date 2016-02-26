var express = require('express');

var app = express();

app.get('/', function(req, res) {
  console.log(res.headersSent);
  res.send("OK");
  console.log(res.headersSent);
});

app.get('/file/:name', function(req, res, next) {
  var options = {
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  var filename = req.params.name;
  res.sendFile(filename, options, function(err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent: ', filename);
    }
  });
});

app.get('/user/:uid/photos/:file', function(req, res) {
  var uid = req.params.uid, file = req.params.file;
  req.user.myViewFilesFrom(uid, function(yes){
    if(yes) {
      res.sendFile('/uploads/' + uid + '/' + file);
    }
    else {
      res.status(403).send('Sorry! you can\'t see that.');
    }
  })
})

app.listen(3000, function(){
  console.log("fight!");
});