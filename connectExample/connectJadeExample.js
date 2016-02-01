var connect = require("connect"),
    connectJade = require("connect-jade");

connect()
  .use(connectJade({
    root: __dirname + "/views",
    defaults: {
      title: "MyApp"
    }
  }))
  .use(function(req, res) {
    res.render("index", { heading: "Welcome to My App"});
  }).listen(3000);
