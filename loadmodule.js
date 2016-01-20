// loadmodule.js
//
var hello1 = require("./module");
hello1.setName('zhaorui');

var hello2 = require('./module');
hello2.setName("escray");

hello1.sayHello();
