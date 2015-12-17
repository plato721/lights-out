const Levels = require('./levels');
var patternList = require('./end-pattern');
const relativeCoords = require('./relative-coords');

function NextMove() {

}

NextMove.prototype.endPattern = function(board) {
  var levels = new Levels();
  for(var i = 0; i < patternList().length; i++){
    var compare = board.toJSON();
    if(levels.areEqual(patternList()[i][0], compare)) {
      return patternList()[i][1];
    }
  }
  return false;
};

NextMove.prototype.upperLeftLit = function(lightGrid) {
  for(var j = 0; j < lightGrid.length; j++) {
    for(var i = 0; i < lightGrid.length; i++) {
      if(lightGrid[i][j].lit ) {
        return [i, j];
      }
    }
  }
};

NextMove.prototype.forBoard = function(board) {
  var patternedMove = this.endPattern(board);
  if(patternedMove) {
    return patternedMove;
  }
  return relativeCoords.below(this.upperLeftLit(board.lightGrid));
};

module.exports = NextMove;
