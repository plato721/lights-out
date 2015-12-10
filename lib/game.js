const Board = require('./board');
var $ = require('jquery');
var Levels = require('./levels');

// const Level = require('./levels.js');

function Game(){
  this.levelGenerator = new Levels();
  this.board = new Board();
  this.bindEvents();
  // this.level = level;
}

Game.prototype.bindEvents = function() {
  this.board.element.on('click', function(){
    if(this.board.countLights() === 0){
      alert("You won!");
    }
  }.bind(this));

  $('#level').on('change', function(){
    console.log($(this).val());
  });
};

module.exports = Game;
