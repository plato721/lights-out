const chai = require('chai');
const assert = chai.assert;

var Leaderboard = require('../lib/leaderboard');
var Score = require('../lib/score');
var utils = require('../lib/utils');

describe('leaderboard', function() {
  it("adds a name and a score to a list", function() {
    var lb = new Leaderboard();
    var score = new Score();

    lb.addScore('matty', score);
    assert(utils.arraysAreEqual(lb.allScores[0], ['matty', score.points]));
  });

  // it("adds 
});