const EventEmitter = require('events');

module.exports = new EventEmitter();

setTimeout(function(){
  console.log('before emit ready');
  module.exports.emit('ready');
  console.log('after emit');
}, 1000);
