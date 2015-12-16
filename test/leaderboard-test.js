const chai = require('chai');
const assert = chai.assert;

var Leaderboard = require('../lib/leaderboard');
var Score = require('../lib/score');
var utils = require('../lib/utils');

describe('leaderboard', function() {
  before(function() {
    this.name_one = "John";
    this.score_one = new Score();
    this.score_one.points = 50;

    this.name_two = "Mary";
    this.score_two = new Score();
    this.score_two.points = 25;

    this.name_three = "Beth";
    this.score_three = new Score();
    this.score_three.points = 35;
  });

  it("adds a name and a score to a list", function() {
    var lb = new Leaderboard();
    var score = new Score();

    lb.addScore('matty', score);
    assert(utils.arraysAreEqual(lb.topScores[0], ['matty', score.points]));
  });

  it("adds multiple scores in descending order", function() {
    var lb = new Leaderboard();

    lb.addScore(this.name_three, this.score_three);
    lb.addScore(this.name_one, this.score_one);
    lb.addScore(this.name_two, this.score_two);

    assert.equal(lb.topScores[0][0], this.name_one);
    assert.equal(lb.topScores[1][0], this.name_three);
    assert.equal(lb.topScores[2][0], this.name_two);
  });

  it("returns top x scores", function() {



  });



});