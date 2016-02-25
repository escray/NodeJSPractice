var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var api = require('./routes/api');
var hbs = require('hbs');

var blogEngine = require('./blog.js');

app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.set('view engine', 'html');
app.engine('html', hbs.__express);


//app.use(express.favicon());
app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(express.logger('dev'));
app.use(morgan('dev'));
//app.use(express.bodyParser());
//app.use(bodyParser);
//app.use(express.methodOverride());
//app.use(methodOverride);
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  var body = 'Hello World!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
})

//app.get('/api', function(req, res) {
//  res.send({name:"zhangsan", age:40});
//});

app.get('/api', api.index);

app.get('/home', function(req, res) {
  //res.sendfile('./views/index.html');
  res.render('index');
});

app.get('/about', function(req, res) {
  //res.sendfile('./views/about.html');
  res.render('about');
});

app.get('/article/:id', function(req, res) {
  //res.sendfile('./views/article.html');
  var entry = blogEngine.getBlogEntry(req.params.id);
  res.render('article', {title:entry.title, blog:entry});
});

app.get('/blog', function(req, res) {
  res.render('index', {title:"recent articles", entries:blogEngine.getBlogEntries()});
})

console.log("start...");
app.listen(app.get('port'));