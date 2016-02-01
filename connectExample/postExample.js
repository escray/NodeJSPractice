var connect = require('connect');

connect()
  .use(function(req, res, next) {
    if (req.method === 'POST') {
      res.end("This is a POST request");
    } else {
      next();
    }
  })
  .use(function(req, res) {
    res.end("This is not a POST request (probably a GET request)");
  })
  .listen(3000);