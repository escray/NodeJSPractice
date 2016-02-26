// https://stephensugden.com/middleware_guide
private_urls = {
  '^/attention': ['coworker', 'girlfriend'],
  '^/bank_balance':['me'],
}

roles = {
  stephen:  ['me'],
  erin:     ['girlfriend'],
  judd:     ['coworker'],
  bob:      ['coworker'],
}

passwords = {
  me:       'doofus',
  erin:     'greatest',
  judd:     'daboss',
  bob:      'anachronistic discomBOBulation',
}


var connect = require('connect');

function uselessMiddleware(req, res, next) {
  next();
}

function worseThanUselessMiddleware(req, res, next) {
  next("Hey are you busy?");
}

//function authenticateUrls(urls) {
//  basicAuthArgs = Array.prototype.slice.call(arguments, 1);
//  basicAuth = connect.basicAuth('username', 'password');
//  function authenticate(req, res, next) {
//    for (var pattern in urls) {
//      if (req.path.match(pattern)) {
//        basicAuth(req, res, next);
//        return;
//      }
//    }
//    next();
//  }
//  return authenticate;
//}

function authorizeUrls(urls, roles) {
  function authorize(req, res, next) {
    for (var pattern in urls) {
      if (req.path.match(pattern)) {
        for (var role in urls[pattern]) {
          if (user[req.remoteUser].indexOf(role) < 0) {
            next(new Error("unauthorized"));
            return;
          }
        }
      }
    }
    next();
  }
  return authorize;
}

nodemailer = require('nodemailer');

function emailErrorNotifier(generic_opts, escalate) {
  function notifyViaEmail(err, req, res, next) {
    if(err) {
      var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com')
      var mailOptions = {
        from: '"Fred Foo" <foo@blurdybloop.com>',
        to: 'bar@blurdybloop.com, baz@blurdybloop.com',
        subject: "ERROR: " + err.constructor.name,
        body: err.stack,
        text: 'hello world',
        html: '<b>Hello world</b>'
      }
      //opts.__proto__ = generic_opts;
      //nodemailer.send(opts, escalate);
      transport.sendMail(mailOptions, function(error, info){
        if (error){
          return console.log(error);
        }
        console.log('message sent: ' + info.response)
;      });
    }
    next();
  }
}

function authCallback(name, password) {
  return passwords[name] === password;
}


var stephen = connect();
//stephen.use(authenticateUrls(private_urls, authCallback));
stephen.use(authorizeUrls(private_urls, roles));
stephen.use('/attention', worseThanUselessMiddleware);
//stephen.use(emailErrorNotifier({to: 'stephen@betsmartmedia.com'}));
stephen.use('/bank_balance', function(req, res, next) {
  res.end("Don't be Seb-ish");
})
stephen.use('/', function (req, res, next) {
  res.end("I'm out of coffee");
});

stephen.listen(3000);

