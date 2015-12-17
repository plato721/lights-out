const chai = require('chai');
const assert = chai.assert;

var Leaderboard = require('../lib/leaderboard');
var Score = require('../lib/score');

describe('leaderboard', function() {
  beforeEach(function() {
    this.name_one = "John";
    this.score_one = new Score();
    this.score_one.points = 50;

    this.name_two = "Mary";
    this.score_two = new Score();
    this.score_two.points = 25;

    this.name_three = "Beth";
    this.score_three = new Score();
    this.score_three.points = 35;

    this.lb = new Leaderboard();
  });

  it("adds multiple scores in descending order", function() {
    this.lb.addScore(this.name_three, this.score_three);
    this.lb.addScore(this.name_one, this.score_one);
    this.lb.addScore(this.name_two, this.score_two);

    assert.equal(this.lb.topScores[0][0], this.name_one);
    assert.equal(this.lb.topScores[1][0], this.name_three);
    assert.equal(this.lb.topScores[2][0], this.name_two);
  });

  it("returns top 5 scores", function() {
    this.lb.addScore(this.name_three, this.score_three);
    this.lb.addScore(this.name_one, this.score_one);
    this.lb.addScore(this.name_two, this.score_two);
    this.lb.addScore(this.name_three, this.score_three);
    this.lb.addScore(this.name_one, this.score_one);

    assert.equal(this.lb.topScores.length, 5);
  });

  it("knows a score is in the top x", function() {
    this.lb.addScore(this.name_three, this.score_three);
    this.lb.addScore(this.name_one, this.score_one);
    this.lb.addScore(this.name_two, this.score_two);
    this.lb.addScore(this.name_three, this.score_three);
    this.lb.addScore(this.name_one, this.score_one);

    this.score_one.points = 51;
    assert(this.lb.isTopScore(this.score_one));
  });

  it("knows any score is a top one for a short list", function() {
    assert.equal(this.score_one.points, 50);
    assert.equal(this.score_two.points, 25);
    assert.equal(this.score_three.points, 35);

    this.lb.addScore('a', this.score_one);
    this.lb.addScore('b', this.score_three);

    assert(this.lb.isTopScore(this.score_two));
  });

  it("prunes the list if adding to a full list", function() {
    this.lb.addScore(this.name_three, this.score_three);
    this.lb.addScore(this.name_one, this.score_one);
    this.lb.addScore(this.name_two, this.score_two);
    this.lb.addScore(this.name_three, this.score_three);
    this.lb.addScore(this.name_one, this.score_one);

    this.score_one.points = 51;
    this.lb.addScore(this.name_one, this.score_one);

    assert.equal(this.lb.topScores.length, 5);
    assert.equal(this.lb.topScores[0][1], 51);
  });




});
