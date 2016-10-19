/* TEST/romannumerals.js */
var hooplah = require('../src/js/romannumerals');
var chai = require('chai');
var assert = chai.assert;

describe('romanNumerals', function() {
  context('When passing in the number 1', function() {
    it('Returns I for 1', function() {
      assert.equal(hooplah(1), 'I', 'Roman Numeral I for 1');
    });
  });

  context('When passing in the number 2', function() {
    it('Returns II for 2', function() {
      assert.equal(hooplah(2), 'II', 'Roman Numeral II for 2');
    });
  });

  context('When passing in the number 4', function() {
    it('Returns IV for 4', function() {
      assert(hooplah(4) === 'IV', 'Roman Numeral IV for 4');
    });
  });
});
