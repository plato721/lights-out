function Score() {
  this.moves = 0;
  this.points = 1000;
}

Score.prototype.incrementMoves = function() {
  this.moves++;
  this.decrementPoints();
};

Score.prototype.decrementPoints = function() {
  this.points -= 10;
};

Score.prototype.cheat = function() {
  debugger;
  this.points -= 100;
};

 module.exports = Score;
