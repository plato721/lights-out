const $ = require('jquery');
const Score = require('./score');

function DisplayLeaderboard(leaderboard, title) {
  this.leaderboard = leaderboard;
  this.attachPoint = $('.leaderboard');
  this.title = title || "Leaderboard";

  this.mockScore = new Score();
  this.populateMock();
  this.showLeaderBoard();
}

DisplayLeaderboard.prototype.populateMock = function() {
  this.leaderboard.addScore('Jack', this.mockScore);
  this.leaderboard.addScore('John', this.mockScore);
  this.leaderboard.addScore('Derek', this.mockScore);
  this.leaderboard.addScore('Jimothy', this.mockScore);
  this.leaderboard.addScore('Jamaraquery', this.mockScore);
};

DisplayLeaderboard.prototype.render = function() {
  this.element = $(this.template());
  this.attachRows();
  return this;
};

DisplayLeaderboard.prototype.attachRows = function() {
  for(var i = 0; i < this.leaderboard.topScores.length; i++) {
    this.element.append(this.rowElement(i,
      this.leaderboard.topScores[i][0], this.leaderboard.topScores[i][1]));
  }
};

DisplayLeaderboard.prototype.rowElement = function(value, name, score) {
  return $(this.rowTemplate(value, name, score));
};

DisplayLeaderboard.prototype.rowTemplate = function(value, name, score) {
  return '<li class="leader" value="' + value + '">' + name +
  "....." + score + '</li>';
};

DisplayLeaderboard.prototype.template = function() {
  return '<ul class="leaders-list"><u>Leaderboard</u></ul>';
};

DisplayLeaderboard.prototype.showLeaderBoard = function() {
  this.render().attachPoint.empty().append(this.element);
};

module.exports = DisplayLeaderboard;