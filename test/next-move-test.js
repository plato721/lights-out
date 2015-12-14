const chai = require('chai');
const assert = chai.assert;

const NextMove = require('../lib/next-move.js');
const Board = require('../lib/board.js');

describe('NextMove', function() {
  before(function() {
    this.nextMove = new NextMove();
  });

  function arraysAreEqual(a, b) {
    for(var i = 0; i < a.length; i++){
      if(a[i] !== b[i]) return false;
    }
    return true;
  }

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
    var result = this.nextMove.upperLeftMost(board.lightGrid);

    assert(board.lightGrid[0][0].lit);
    assert(arraysAreEqual(expected, result));
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
    var result = this.nextMove.upperLeftMost(board.lightGrid);

    assert(board.lightGrid[1][0].lit);
    assert(arraysAreEqual(expected, result));
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
    var result = this.nextMove.upperLeftMost(board.lightGrid);
    assert(arraysAreEqual(expected, result));
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
    assert(arraysAreEqual([1,1], this.nextMove.forBoard(board)));
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
    var result = this.nextMove.forBoard(board);

    assert(arraysAreEqual([2,1], result));// this.nextMove.forBoard(board)));
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
    var result = this.nextMove.forBoard(board);

    assert(arraysAreEqual([0,3], result));
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
    var result = this.nextMove.forBoard(board);

    assert(arraysAreEqual([0,0], result));
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
    var result = this.nextMove.forBoard(board);

    assert(arraysAreEqual([1,0], result));
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
    var result = this.nextMove.forBoard(board);

    assert(arraysAreEqual([0,0], result));
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
    var result = this.nextMove.forBoard(board);

    assert(arraysAreEqual([3,0], result));
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
    var result = this.nextMove.forBoard(board);

    assert(arraysAreEqual([1,0], result));
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
    var result = this.nextMove.forBoard(board);

    assert(arraysAreEqual([3,0], result));
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
    var result = this.nextMove.forBoard(board);

    assert(arraysAreEqual([4,0], result));
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
    var result = this.nextMove.forBoard(board);

    assert(arraysAreEqual([0,0], result));
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
    var result = this.nextMove.forBoard(board);

    assert(arraysAreEqual([2,0], result));
  });

});