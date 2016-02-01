var connect = require('connect');
var serveStatic = require('serve-static');
var url = require('url');
var root = process.cwd();
var app = connect()
          // .use(function(req, res, next){
          //   if (url.parse(req.url).path === '/')
          //     req.url += 'index.html';
          //   next();
          // })
          
          .use(serveStatic('public', 
            {'index': ['index.html','index.htm']}))
          .use(serveStatic(root))
          .listen(2100);

