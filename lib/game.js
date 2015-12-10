const Board = require('./board');
const level = require('./levels/level-1.json');

function Game(){
  this.board = new Board();
  this.bindEvents();
  this.level = level;
}

Game.prototype.bindEvents = function() {
  this.board.element.on('click', function(){
    if(this.board.countLights() === 0){
      alert("You won!");
    }
  }.bind(this));
};

module.exports = Game;
