const { expect } = require('chai'); // expect can be imported explicitly

describe('calculate', function() {

  it('should sum up', function() {
    expect(1 + 2).to.eql(3);
  });

});
