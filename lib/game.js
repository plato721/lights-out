const Board = require('./board');
// const Level = require('./levels.js');

function Game(){
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
};

module.exports = Game;
