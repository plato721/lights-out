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

  it("adds multiple scores in descending order", function() {
    var lb = new Leaderboard();

    var name_one = "John";
    var score_one = new Score();
    score_one.points = 50;

    var name_two = "Mary";
    var score_two = new Score();
    score_two.points = 25;

    var name_three = "Beth";
    var score_three = new Score();
    score_three.points = 35;

    lb.addScore(name_three, score_three);
    lb.addScore(name_one, score_one);
    lb.addScore(name_two, score_two);

    assert.equal(lb.allScores[0][0], name_one);
    assert.equal(lb.allScores[1][0], name_three);
    assert.equal(lb.allScores[2][0], name_two);
  });
});