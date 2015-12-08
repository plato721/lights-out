const Board = require('./board');

function Game(){
  this.board = new Board();
  this.bindEvents();
}

Game.prototype.bindEvents = function() {
  this.board.element.on('click', function(){
    if(this.board.countLights() === 0){
      alert("You won!");
    }
  }.bind(this));
};

module.exports = Game;
