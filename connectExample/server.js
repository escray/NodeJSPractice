var connect = require("connect"),
    app = require("./app");

connect()
  .use(app)
  .listen(3000)