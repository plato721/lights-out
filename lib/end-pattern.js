const Board = require('./board');

module.exports = function(board) {
  var endLevels = [
  [{"0" : "00000",
    "1" : "00000",
    "2" : "00000",
    "3" : "00000",
    "4" : "10001"}, [0, 0]],

  [{"0" : "11000",
    "1" : "10000",
    "2" : "00000",
    "3" : "00000",
    "4" : "10001"}, [1, 0]]
  ];

  for(var i = 0; i < endLevels.length; i++){
    var compare = new Board(endLevels[i][0]);
    if(board.equals(compare)) return endLevels[i][1];
  }

  return false;
};