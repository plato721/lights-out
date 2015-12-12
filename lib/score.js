function Score(){
  this.moves = 0;

}

Score.prototype.incrementMoves = function(){
  this.moves++;
};

 module.exports = Score;
