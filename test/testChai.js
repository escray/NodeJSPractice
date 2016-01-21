var chai = require('chai');
var expect = chai.expect;
var should = chai.should(); 
var foo = 'bar';

describe('chai', function() {
  // http://chaijs.com/guide/styles/
  describe('should', function() {
    it('should return pass', function(){
      foo.should.equal('bar');
      foo.should.have.length(3);
    });    
  });

  // http://chaijs.com/api/bdd/
  describe('bdd api', function() {
    it('not', function() {
      expect(foo).to.not.equal('bara');
      expect({foo: 'baz'}).to.have.property('foo').and.not.equal('bar');
    });

    it('deep', function() {
      expect({ foo: { bar: { baz: 'quux'}}}).to.have.deep.property('foo.bar.baz', 'quux');
    });

    it('a', function() {
      expect('test').to.be.a('string');
      expect({ foo: 'bar'}).to.be.an('object');
      expect(null).to.be.a('null');
      expect(undefined).to.be.an('undefined');
      // expect(foo).to.be.an.instanceof(Foo);
    });

  });
});

