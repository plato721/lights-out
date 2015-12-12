const Board = require('./board');
var $ = require('jquery');
var Levels = require('./levels');
var Score = require('./score');

function Game(){
  this.levelGenerator = new Levels();
  this.levelIndex = 0;
  this.score = new Score();
  this.initBoard();
  this.bindEvents();
}

Game.prototype.bindEvents = function() {
  this.board.element.on('click', function(){
    this.score.incrementMoves();
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
  alert("You won!");
};

Game.prototype.gameIsWon = function() {
  return this.board.countLights() === 0;
};

Game.prototype.initBoard = function() {
  this.setLevel();
  this.setBoard();
};

Game.prototype.setMenu = function() {
  var showIndex = this.levelIndex + 1;
  $('#level').val(showIndex);
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
