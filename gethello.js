// gethello.js
//
var Hello = require("./hello");

hello = new Hello();
hello.setName("Escray");
hello.sayHello();

Hello2 = require("./singleobject").Hello;
hello2 = new Hello2();
hello2.setName("zhaorui");
hello2.sayHello();
