const { expect } = require('chai'); // expect can be imported explicitly

describe.only('calculate', function() { // eslint-disable-line mocha/no-exclusive-tests

  it.only('should sum up', function() { // eslint-disable-line mocha/no-exclusive-tests
    expect(1 + 2).to.eql(3);
  });

});
