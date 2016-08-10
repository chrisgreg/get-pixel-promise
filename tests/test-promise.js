var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var getPixelPromise = require('../src/index');

describe('get-pixel-promise', function() {

  var promise;

  before(function() {
    promise = getPixelPromise(__dirname +"/resources/fox.jpg");
  })

  it('should return shape data from the promise', function() {
    var expectedShape = [ 1000, 665, 4 ];
    var shape = promise.then(function(result) {
      return result.shape;
    });

    return expect(shape).to.eventually.deep.equal(expectedShape);
  });

  it('should return stride data from the promise', function() {
    var expectedStride =  [ 4, 4000, 1 ];
    var stride = promise.then(function(result) {
      return result.stride;
    });

    return expect(stride).to.eventually.deep.equal(expectedStride);
  });

  it('should return offset data from the promise', function() {
    var expectedOffset = 0;
    var offset = promise.then(function(result) {
      return result.offset;
    });

    return expect(offset).to.eventually.deep.equal(expectedOffset);
  });
});
