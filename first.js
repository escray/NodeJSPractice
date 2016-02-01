main();
mod();

function main() {
  var debug = require('debug')('app:main');
  debug('Hello from main!');
}

function mod() {
  var debug = require('debug')('app:mod');
  debug('Message from mod.');
}