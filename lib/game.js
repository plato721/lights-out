const Board = require('./board');
var $ = require('jquery');
var Levels = require('./levels');

function Game(){
  this.levelGenerator = new Levels();
  this.levelIndex = 0;
  this.initBoard();
  this.bindEvents();
}

Game.prototype.bindEvents = function() {
  this.board.element.on('click', function(){
    if(this.board.countLights() === 0){
      alert("You won!");
      this.incrementLevelIndex();
      this.initBoard();
      this.setMenu();
    }
  }.bind(this));

  var self = this;
  $('#level').on('change', function(){
    var selectedLevel = $(this).val();
    self.levelIndex = selectedLevel - 1;
    self.initBoard();
  });
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
  if ( this.levelIndex < this.levelGenerator.list.length - 2 ) {
    this.levelIndex++;
  }
};

module.exports = Game;
