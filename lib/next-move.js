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
  // match against end patterns (stuff is in last row only)
  // match against in process end pattern solutions
  // find light in highest position, closest to left
  //   return the coordinates of the light under this one
  // debugger;
  return board.coordsBelow(this.upperLeftMost(board.lightGrid));
};

module.exports = NextMove;

