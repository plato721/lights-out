const chai = require('chai');
const assert = chai.assert;

var Game = require('../lib/game');

describe("Game", function() {
  beforeEach(function() {
    this.game = new Game();
  });

  it("initializes a score object with max points", function() {
    assert(this.game.score);
    assert.equal(this.game.score.points, 1000);
  });
  it("initializes a levels object", function() {
    assert(this.game.levelGenerator);
  });

  it("initializes a leaderboard repository with one per level", function() {
    assert(this.game.leaderboardRepo);
    assert.equal(this.game.leaderboardRepo.list.length, 6);
  });

  it("initializes a messages object", function() {
    assert(this.game.displayMessage);
  });

  it("has a level index defaulting to 0", function() {
    assert(this.game.levelIndex === 0);
  });

  it("has a leaderboard defaulting to level one", function() {
    assert(this.game.leaderboard.name === 'Level 1');
  });

  it("can increment to next level", function() {
    this.game.incrementLevelIndex();
    assert(this.game.levelIndex === 1);
  });

});
