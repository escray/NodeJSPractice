var assert = require('assert');
var should = require('should');
describe('Array', function() {
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });

  describe('Synchronous Code', function(){
    it('should return -1 when the value is not present', function() {
      
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });
  });


});

function add() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr){
    return prev + curr;
  }, 0);
}

describe('add()', function() {  
  var tests = [
    {args: [1, 2],        expected: 3},
    {args: [1, 2, 3] ,    expected: 6},
    {args: [1, 2, 3, 4],  expected: 10}
  ];

  tests.forEach(function(test) {
    it('correctly adds' + test.args.length + 'args', function(){
      var res = add.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});

describe('something slow', function() {
  this.slow(10);
  it('should take long enough for me to go make a sandwich', function() {
    var NUM = 10000;
    for (var i = 0; i < NUM; i++) {
      for(var j = 0; j < NUM; j++) {
        i * j;
      }      
    };
  });
});