const chai = require('chai');
const assert = chai.assert;

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

  it('can check for equality of levels', function() {
    var levels = new Levels();
    var level = levels.list[0];
    var same_level = levels.list[0];

    assert(levels.areEqual(level, same_level),
      "These levels should be equal but are not");
  });

  it('knows if levels are not equal', function() {
    var levels = new Levels();
    var level = levels.list[1];
    var different = levels.list[2];

    assert.isFalse(levels.areEqual(level, different),
      "These levels should not be equal");
  });
});
