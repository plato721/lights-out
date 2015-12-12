const Board = require('./board');
var $ = require('jquery');
var Messages = require('./messages');
var DisplayMessages = require('./display-message');
var Levels = require('./levels');
var Score = require('./score');

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
  this.board.element.on('click', function(){
    this.score.incrementMoves();
    this.displayMessage.showScore(this.score.points);
    if(this.gameIsWon()) {
      this.displayGameWon();
      this.incrementLevelIndex();
      this.initBoard();
      this.setMenu();
    }
  }.bind(this));

  var self = this;
  $('#levels').on('click', '.level', function(){
    var selectedLevel = $(this).val();
    self.levelIndex = selectedLevel - 1;
    self.initBoard();
  });
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
