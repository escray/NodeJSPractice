var express = require('express');
var logger = require('morgan');
var app = express();
var router = express.Router();

router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

router.use('/bar', function(req, res, next) {
  next();
});

app.use('/foo', router);

app.use(logger());
app.use(express.static(__dirname + '/public'));
router.use(function(req, res, next) {
  res.send('Hello World');
});

app.get('/example/b', function(req, res, next) {
  console.log('the response will be sent by the next function...');
  next();
}, function(req, res){
  res.send('Hello from B');
});


app.listen(3000, function() {
  console.log("go!");
})