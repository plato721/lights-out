const chai = require('chai');
const assert = chai.assert;

var Score = require('../lib/score.js');

describe('Score', function() {
  it("keeps track of moves", function() {
    var score = new Score();

    assert.equal(score.moves, 0);
  });

  it("adds a move", function() {
    var score = new Score();
    score.incrementMoves();

    assert.equal(score.moves, 1);
  });
});