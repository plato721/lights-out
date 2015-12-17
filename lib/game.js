const Board = require('./board');
var $ = require('jquery');
var DisplayMessages = require('./display-message');
var Levels = require('./levels');
var Score = require('./score');
var LeaderboardManager = require('./leaderboard-manager');
var DisplayLeaderboard = require('./display-leaderboard');
var Hinter = require('./hint');

function Game(){
  this.levelIndex = 0;
  this.levelGenerator = new Levels();
  this.leaderboardRepo = new LeaderboardManager(this.levelGenerator);
  this.score = new Score();
  this.displayMessage = new DisplayMessages();
  this.instructions();
  this.initBoard();
  this.bindEvents();
  this.hinter = new Hinter(this);
}

Game.prototype.bindEvents = function() {
  var self = this;

  self.board.element.on('click', function(){
    self.processMove();
  });

  $('#levels').on('click', '.level', function(){
    var selectedLevel = $(this).val();
    self.levelIndex = selectedLevel - 1;
    self.initBoard();
  });

  $('.hint').on('click', function() {
    self.hinter.showHint(self.board);
  });
};

Game.prototype.instructions = function () {
  $('#instructions').on('click', function(){
    $(this).hide();
  });
};

Game.prototype.initBoard = function() {
  this.setLevel();
  this.setLeaderboard();
  this.setScore();
  this.setBoard();
  this.displayMessage.showScore(this.score.points);
  this.setMenu();
  new DisplayLeaderboard(this.leaderboard);
};

Game.prototype.processMove = function() {
  this.score.incrementMoves();
  this.displayMessage.showScore(this.score.points);
  this.hinter.clearHint();
  if(this.gameIsWon()) {
    this.processWin();
  }
  if(this.gameIsLost()) {
    this.processLoss();
  }
};

Game.prototype.processLoss = function() {
  this.displayMessage.showLossMessage();
  this.initBoard();
};

Game.prototype.processWin = function() {
  var leaderboard = this.leaderboard;
  var score = this.score;
  var isHighscore = this.leaderboard.isTopScore(score);
  this.displayGameWon(isHighscore, leaderboard, score);
  this.incrementLevelIndex();
  this.initBoard();
};

Game.prototype.displayGameWon = function(isHighscore, leaderboard, score) {
  if (isHighscore) {
    this.displayMessage.showHighScoreMessage(this, leaderboard, score);
  } else {
    this.displayMessage.showWinMessage();
  }
};

Game.prototype.getName = function(input, leaderboard, score) {
  leaderboard.addScore(input, score);
};

Game.prototype.gameIsWon = function() {
  return this.board.countLights() === 0;
};

Game.prototype.gameIsLost = function() {
  return this.score.points <= 0;
};

Game.prototype.setMenu = function() {
  var showIndex = this.levelIndex + 1;
  var levels = $('#levels').find('.level');
  levels.removeClass('active');
  levels.filter(function(){
    return $(this).val() === showIndex;
  }).addClass('active');
};

Game.prototype.setScore = function() {
  this.score = new Score();
};

Game.prototype.setBoard = function() {
  this.board = new Board(this.level);
};

Game.prototype.setLevel = function() {
  this.level = this.levelGenerator.list[this.levelIndex];
};

Game.prototype.setLeaderboard = function() {
  this.leaderboard = this.leaderboardRepo.list[this.levelIndex];
};

Game.prototype.incrementLevelIndex = function() {
  if ( this.levelIndex < this.levelGenerator.list.length - 1 ) {
    this.levelIndex++;
  }
};

module.exports = Game;
