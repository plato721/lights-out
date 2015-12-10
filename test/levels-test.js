const chai = require('chai');
const assert = chai.assert;

var Game = require('../lib/game.js');
var Levels = require('../lib/levels.js');

describe('Levels', function() {
  beforeEach(function() {
    this.level1 = {
      "0" : "01000",
      "1" : "11100",
      "2" : "01010",
      "3" : "00111",
      "4" : "00010"
    };
  });

  it('has an array of levels', function() {
    var levels = new Levels();

    assert.typeOf(levels.list, 'array');
  });

  it('has a json level for the first level', function() {
    var levels = new Levels();
    var expected = levels.list[0];

    for(var i = 0; i < 5; i++) {
      var idx = parseInt(i);
      assert.equal(expected[idx], this.level1[idx]);
    }
  });
});