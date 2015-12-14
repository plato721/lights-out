var endPattern = require('./end-pattern');
const relativeCoords = require('./relative-coords');

function NextMove() {

}

NextMove.prototype.upperLeftLit = function(lightGrid) {
  for(var j = 0; j < lightGrid.length; j++) {
    for(var i = 0; i < lightGrid.length; i++) {
      if(lightGrid[i][j].lit ) return [i, j];
    }
  }
};

NextMove.prototype.forBoard = function(board) {
  var patternedMove = endPattern(board);
  if(patternedMove) return patternedMove;
  return relativeCoords.below(this.upperLeftLit(board.lightGrid));
};

module.exports = NextMove;
