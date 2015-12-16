const Board = require('./board');
var $ = require('jquery');
var Messages = require('./messages');
var DisplayMessages = require('./display-message');
var Levels = require('./levels');
var Score = require('./score');
var Hint = require('./next-move');

function Game(){
  this.levelIndex = 0;

  this.levelGenerator = new Levels();
  this.score = new Score();
  this.displayMessage = new DisplayMessages();
  this.messages = new Messages();

  this.initBoard();
  this.bindEvents();
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
    self.showHint(self.board);
  });//.bind(this));
};

Game.prototype.processMove = function() {
  this.score.incrementMoves();
  this.displayMessage.showScore(this.score.points);
  this.clearHint();
  if(this.gameIsWon()) {
    this.displayGameWon();
    this.incrementLevelIndex();
    this.initBoard();
    this.setMenu();
  }
};

Game.prototype.getHint = function(board) {
  var genHint = new Hint();
  return genHint.forBoard(board);
};

Game.prototype.showHint = function(board) {
  var nextMove = this.getHint(board);
  this.hintLight = this.board.lightGrid[nextMove[0]][nextMove[1]];
  alert("Top left is (0, 0), next move is (" + nextMove[0] +
    ", " + nextMove[1] + ")");
  this.cheated = true;
  this.hintLight.flipHinted().rerender();
  this.score.cheat();
  this.displayMessage.showScore(this.score.points);
};

Game.prototype.clearHint = function() {
  if(this.cheated) {
    this.hintLight.flipHinted().rerender();
    this.cheated = false;
  }
};

Game.prototype.displayGameWon = function() {
  this.displayMessage.showTitle(this.messages.win);
  alert("You won!");
};

Game.prototype.gameIsWon = function() {
  return this.board.countLights() === 0;
};

Game.prototype.initBoard = function() {
  this.setLevel();
  this.setScore();
  this.setBoard();
  this.displayMessage.showTitle(this.messages.title);
  this.displayMessage.showScore(this.score.points);
};

Game.prototype.setMenu = function() {
  var showIndex = this.levelIndex + 1;
  $('#level').val(showIndex);
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

Game.prototype.incrementLevelIndex = function() {
  if ( this.levelIndex < this.levelGenerator.list.length - 1 ) {
    this.levelIndex++;
  }
};

module.exports = Game;
