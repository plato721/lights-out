var endPattern = require('./end-pattern');

function NextMove() {

}

NextMove.prototype.upperLeftMost = function(lightGrid) {
  for(var j = 0; j < lightGrid.length; j++) {
    for(var i = 0; i < lightGrid.length; i++) {
      if(lightGrid[i][j].lit ) return [i, j];
    }
  }
};

NextMove.prototype.forBoard = function(board) {
  var patternedMove = endPattern(board);
  if(patternedMove) return patternedMove;
  return board.coordsBelow(this.upperLeftMost(board.lightGrid));
};

module.exports = NextMove;

