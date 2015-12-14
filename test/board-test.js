const chai = require('chai');
const assert = chai.assert;
const _ = require('lodash');

var Board = require('../lib/board.js');
var Light = require('../lib/light.js');
var Levels = require('../lib/levels.js');

describe('Creating a new board', () => {
  function arraysAreEqual(a, b) {
    for(var i = 0; i < a.length; i++){
      if(a[i] !== b[i]) return false;
    }
    return true;
  }

  it("has a set width", () => {
    let board = new Board();
    assert.equal(board.width, 5);
  });

  it("can create empty light grid", () => {
    let board = new Board();
    assert.lengthOf(_.flatten(board.createEmptyGrid(5,5)), 25);
  });

  it("can place light objects on grid", () => {
    let board = new Board();

    for(var i = 0; i < board.width; i++){
      for(var j = 0; j < board.width; j++){
        assert.instanceOf(board.lightGrid[i][j], Light, "each lightGrid is an instance of Light");
      }
    }
  });

  it("can be initialized with a level", () => {
    var levels = new Levels();
    let board = new Board(levels.list[0]);

    assert.isFalse(board.lightGrid[0][0].lit);
    assert(board.lightGrid[1][0].lit);
    assert.isFalse(board.lightGrid[2][0].lit);
    assert(board.lightGrid[0][1].lit);
    assert.isFalse(board.lightGrid[0][2].lit);
    assert(board.lightGrid[1][2].lit);
  });

  it("knows left neighbor coords for coords", function() {
    var board = new Board();
    var x = 1, y = 1;

    var result = board.coordsLeft([x, y]);
    assert(arraysAreEqual(result, [x - 1, y]));
  });

  it("knows right neighbor coords for coords", function() {
    var board = new Board();
    var x = 1, y = 1;

    var result = board.coordsRight([x, y]);
    assert(arraysAreEqual(result, [x + 1, y]));
  });

  it("knows coords below given coords", function() {
    var board = new Board();
    var x = 2, y = 0;

    var result = board.coordsBelow([x, y]);
    assert(arraysAreEqual(result, [x, y + 1]));
  });

  it("knows coords above given coords", function() {
    var board = new Board();
    var x = 1, y = 1;

    var result = board.coordsAbove([x, y]);
    assert(arraysAreEqual(result, [x, y - 1]));
  });

  it("knows if coords are off board to left", function() {
    var board = new Board();
    var x = -1, y = 0;

    assert.isFalse(board.onBoard(x, y));
  });

  it("knows if coords are off board to right", function() {
    var board = new Board();
    var x = 5, y = 0;

    assert.isFalse(board.onBoard(x, y));
  });

  it("knows if coords are off board below", function() {
    var board = new Board();
    var x = 0, y = 5;

    assert.isFalse(board.onBoard(x, y));
  });

  it("knows if coords are off board above", function() {
    var board = new Board();
    var x = 0, y = -1;

    assert.isFalse(board.onBoard(x, y));
  });

  it("gets back set of raw neighbor coordinates", function() {
    var board = new Board();
    var x = 1, y = 1;

    assert.equal(board.rawNeighborCoords(x, y).length, 4);
  });

  it("gets back set of neighbor coords", function() {
    var board = new Board();
    var x = 1, y = 1;

    assert.equal(board.neighborCoords(1, 1).length, 4);
  });
});
