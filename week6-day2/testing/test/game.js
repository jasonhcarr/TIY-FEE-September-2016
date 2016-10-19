/* TEST/game.js */
var Game = require('../src/js/game');
var chai = require('chai');
var assert = chai.assert;

describe('Game', function() {
  context('Creating new instance of Game', function() {
    it('Is a new instance of Game', function() {
      assert.instanceOf(new Game(), Game, 'Game is an instance of Game.');
    });
  });

  context('Has property test', function() {
    it('New game has test property', function() {
      assert.property(new Game(), 'test', 'Game has test property');
    });
  });
});
