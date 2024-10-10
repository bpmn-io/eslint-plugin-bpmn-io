import { expect } from 'chai'; // expect can be imported explicitly

describe.only('calculate', function() { // eslint-disable-line mocha/no-exclusive-tests

  it.only('should sum up', function() { // eslint-disable-line mocha/no-exclusive-tests
    expect(1 + 2).to.eql(3);
  });

  it.only('should subtract', function() { // eslint-disable-line mocha/no-exclusive-tests
    expect(1 - 2).to.eql(-1);
  });

  it('should subtract'); // eslint-disable-line mocha/no-identical-title

});
