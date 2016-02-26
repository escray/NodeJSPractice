var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/profile', upload.array(), function(req, res, next) {
  console.log(req.body);
  res.json(req.body);
})

app.get('/user/:id?', function userIdHandler(req, res) {
  console.log(req.route);
  res.send('GET');
});


app.listen(3000, function() {
  console.log("Come on");
})