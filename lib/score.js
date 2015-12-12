function Score(){
  this.moves = 0;
  this.points = 1000;

}

Score.prototype.incrementMoves = function(){
  this.moves++;
};

 module.exports = Score;
