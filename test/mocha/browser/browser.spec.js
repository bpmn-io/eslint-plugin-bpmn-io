import { expect } from 'chai';
import { pick } from '../lib/object';

const diagramXML = require('./diagram.bpmn');

console.log(diagramXML);

// derived from min-dash
describe('object', function() {

  describe('pick', function() {

    it('should take selected attributes', function() {

      // given
      let obj = {
        a: 1,
        b: false,
        c: null,
        e: undefined
      };

      // when
      let picked = pick(obj, [ 'a', 'c', 'd', 'e' ]);

      // then
      expect(picked).to.eql({
        a: 1,
        c: null,
        e: undefined
      });

    });
  });
});
