const chai = require('chai');
const assert = chai.assert;
const _ = require('lodash');

var Board = require('../lib/board.js');

describe('Creating a new board', () => {

  it("has a set height", () => {
    let board = new Board();
    assert.equal(board.width, 5);
  });

  it("can create empty light grid", () => {
    let board = new Board();
    assert.lengthOf(_.flatten(board.createEmptyGrid(5,5)), 25);
  });

  it("can place light objects on grid", () => {
    let board = new Board();
    assert.
  });

});
