const chai = require('chai');
const assert = chai.assert;
const _ = require('lodash');

var Board = require('../lib/board.js');
var Light = require('../lib/light.js');
var Levels = require('../lib/levels.js');

describe('Creating a new board', () => {

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
        assert.instanceOf(board.lightGrid[i][j], Light);
      }
    }
  });

  it("can be initialized with a level", () => {
    let levels = new Levels();
    let board = new Board(levels.list[0]);
    console.log(levels.list[0]);

    assert.isFalse(board.lightGrid[0][0].lit);
    assert(board.lightGrid[1][0].lit);
  });

  // it("can be initialized with a different level", () => {
    
  // });

});
