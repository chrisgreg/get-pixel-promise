var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('get-pixel-promise', function() {
  it('should do something', function() {
    var blah = 'foo';

    var result = 'a'

    return expect(result).to.equal('a');
  });
});
