module.exports = function(x, y, board) {
  var width = board.width;
  var relativeCoords = require('./relative-coords');

  return rawNeighborCoords(x,y).filter(function(coords){
    return onBoard(coords[0], coords[1]);
  });

  function rawNeighborCoords(x,y) {
    return [relativeCoords.above([x,y]), relativeCoords.below([x,y]),
      relativeCoords.right([x,y]), relativeCoords.left([x,y])];
  }

  function onBoard(x,y) {
    return !( offBoardLeft(x,y) || offBoardRight(x,y) ||
              offBoardAbove(x,y) || offBoardBelow(x,y) );
  }

  function offBoardLeft (x) {
    return x < 0;
  }

  function offBoardRight(x) {
    return x > width - 1;
  }

  function offBoardAbove(x, y) {
    return y < 0;
  }

  function offBoardBelow(x, y) {
    return y > width - 1;
  }

};
