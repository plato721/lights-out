const chai = require('chai');
const assert = chai.assert;

const nextMove = require('../lib/next-move.js');
const Board = require('../lib/board.js');
const utils = require('../lib/utils.js');

describe('nextMove', function() {

  it("knows upper left light on board", function() {
    var level = {
      "0" : "11000",
      "1" : "11000",
      "2" : "00000",
      "3" : "00000",
      "4" : "00000"
    };

    var board = new Board(level);

    var expected = [0, 0];
    var result = nextMove.upperLeftLit(board.lightGrid);

    assert(board.lightGrid[0][0].lit);
    assert(utils.arraysAreEqual(expected, result));
  });

  it("knows different upper left light", function() {
    var level = {
      "0" : "01000",
      "1" : "11000",
      "2" : "00000",
      "3" : "00000",
      "4" : "00000"
    };

    var board = new Board(level);

    var expected = [1, 0];
    var result = nextMove.upperLeftLit(board.lightGrid);

    assert(board.lightGrid[1][0].lit);
    assert(utils.arraysAreEqual(expected, result));
  });


  it("knows upper left light in second row", function() {
    var level = {
      "0" : "00000",
      "1" : "11000",
      "2" : "00000",
      "3" : "00000",
      "4" : "00000"
    };

    var board = new Board(level);

    var expected = [0, 1];
    var result = nextMove.upperLeftLit(board.lightGrid);
    assert(utils.arraysAreEqual(expected, result));
  });

  it("knows for single light on top row", function(){
    var level = {
      "0" : "01000",
      "1" : "11100",
      "2" : "01000",
      "3" : "00000",
      "4" : "00000"
    };
    var board = new Board(level);
    assert(utils.arraysAreEqual([1,1], nextMove.forBoard(board)));
  });


  it("knows for different single light on top row", function(){
    var level = {
      "0" : "00100",
      "1" : "01110",
      "2" : "00100",
      "3" : "00000",
      "4" : "00000"
    };
    var board = new Board(level);
    var result = nextMove.forBoard(board);

    assert(utils.arraysAreEqual([2,1], result));// nextMove.forBoard(board)));
  });

  it("knows for another board for above last row", function() {
    var level = {
      "0" : "00000",
      "1" : "00000",
      "2" : "10001",
      "3" : "11011",
      "4" : "11111"
    };
    var board = new Board(level);
    var result = nextMove.forBoard(board);

    assert(utils.arraysAreEqual([0,3], result));
  });

  it("knows first move for end game for 10001", function() {
    var level = {
      "0" : "00000",
      "1" : "00000",
      "2" : "00000",
      "3" : "00000",
      "4" : "10001"
    };

    var board = new Board(level);
    var result = nextMove.forBoard(board);

    assert(utils.arraysAreEqual([0,0], result));
  });

  it("knows second move for end game for 10001", function() {
    var level = {
      "0" : "11000",
      "1" : "10000",
      "2" : "00000",
      "3" : "00000",
      "4" : "10001"
    };
    var board = new Board(level);
    var result = nextMove.forBoard(board);

    assert(utils.arraysAreEqual([1,0], result));
  });

  it("knows first move for end game for 01010", function() {
    var level = {
      "0" : "00000",
      "1" : "00000",
      "2" : "00000",
      "3" : "00000",
      "4" : "01010"
    };

    var board = new Board(level);
    var result = nextMove.forBoard(board);

    assert(utils.arraysAreEqual([0,0], result));
  });

  it("knows second move for end game for 01010", function() {
    var level = {
      "0" : "11000",
      "1" : "10000",
      "2" : "00000",
      "3" : "00000",
      "4" : "01010"
    };
    var board = new Board(level);
    var result = nextMove.forBoard(board);

    assert(utils.arraysAreEqual([3,0], result));
  });

  it("knows move for end game for 11100", function() {
    var level = {
      "0" : "00000",
      "1" : "00000",
      "2" : "00000",
      "3" : "00000",
      "4" : "11100"
    };
    var board = new Board(level);
    var result = nextMove.forBoard(board);

    assert(utils.arraysAreEqual([1,0], result));
  });

  it("knows move for end game for 00111", function() {
    var level = {
      "0" : "00000",
      "1" : "00000",
      "2" : "00000",
      "3" : "00000",
      "4" : "00111"
    };
    var board = new Board(level);
    var result = nextMove.forBoard(board);

    assert(utils.arraysAreEqual([3,0], result));
  });

  it("knows move for end game for 10110", function() {
    var level = {
      "0" : "00000",
      "1" : "00000",
      "2" : "00000",
      "3" : "00000",
      "4" : "10110"
    };
    var board = new Board(level);
    var result = nextMove.forBoard(board);

    assert(utils.arraysAreEqual([4,0], result));
  });

  it("knows move for end game for 01101", function() {
    var level = {
      "0" : "00000",
      "1" : "00000",
      "2" : "00000",
      "3" : "00000",
      "4" : "01101"
    };
    var board = new Board(level);
    var result = nextMove.forBoard(board);

    assert(utils.arraysAreEqual([0,0], result));
  });

  it("knows move for end game for 11011", function() {
    var level = {
      "0" : "00000",
      "1" : "00000",
      "2" : "00000",
      "3" : "00000",
      "4" : "11011"
    };
    var board = new Board(level);
    var result = nextMove.forBoard(board);

    assert(utils.arraysAreEqual([2,0], result));
  });

});