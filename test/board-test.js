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

  it("holds as equal two boards with the same coordinates of lit lights", 
    function(){
      var level = {
        "0" : "10000",
        "1" : "01000",
        "2" : "00100",
        "3" : "00010",
        "4" : "00001"
      };

      var board = new Board(level);
      var board_2 = new Board(level);
      assert(board.equals(board_2));
  });

  it("dumps to json", function() {
    var levels = new Levels();
    var board = new Board(levels.list[0]);

    assert(levels.areEqual(board.toJSON(), levels.list[0]),
      "Levels should be equal");
  });

  it("dumps another to json", function() {
    var level = {
        "0" : "01001",
        "1" : "01000",
        "2" : "00100",
        "3" : "00110",
        "4" : "10101"
    };

    var levels = new Levels();
    var board = new Board(level);

    assert(levels.areEqual(board.toJSON(), level));
  });
});
