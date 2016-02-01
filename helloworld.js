console.log('Hello World');

console.log('%s: %d' , 'Hello', 25);

setTimeout(function() {
  console.log("timeout world");
}, 2000)

console.log("timeout: hello");



setInterval(function() {
  console.log("interval world");
}, 2000);

console.log("interval: hello");
