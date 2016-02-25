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

function authenticateUrls(urls) {
  basicAuthArgs = Array.slice.call(arguments, 1);
  basicAuth = require('connect').basicAuth.apply(basicAuthArgs);
}