const chai = require('chai');
const assert = chai.assert;
const _ = require('lodash');

var Board = require('../lib/board.js');
var Light = require('../lib/light.js');

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
        assert.instanceOf(board.lightGrid[i][j], Light, "each lightGrid is an instance of Light");
      }
    }
  });
});

// describe("updating board", () => {

  // it("can find all neightbors for a particular light", () => {
    // var board = new Board();

    // light towards middle of board
    // var light = board.lightGrid[2][2];
    // assert.equal(2,light.x);
    // assert.equal(2,light.y);

    // all neighbor lights
    // var lights = board.getNeighbors(light);

    // expected coordinates of neightbor lights
    // var expected = [[1, 2],[2, 1],[3, 2],[2, ]].sort();
    // lights = lights.sort();

    // for(var i = 0; i < expected.length; i++){
      // console.log([lights[i].x, lights[i].y]);
      // assert.deepEqual(expected[i], [lights[i].x, lights[i].y])
    // }

    // assert.lengthOf(lights, 4);
  // });

  // it("only updates lights visible on the board", function(){
  //   var board = new Board();
  //
  //   // light on corner of board
  //   var light = board.lightGrid[0][0];
  //   assert.equal(0,light.x);
  //   assert.equal(0,light.y);
  //
  //   // all neighbor lights
  //   var lights = board.getNeighbors(light);
  //   assert.lengthOf(lights, 2);
  //
  //   // each neighbor light
  //   var firstNeighbor = lights[0];
  //   var secondNeighbor = lights[1];
  //
  //   // neighbor to the left
  //   assert.equal(firstNeighbor.x, 1);
  //   assert.equal(firstNeighbor.y, 0);
  //
  //   // neighbor to the top
  //   assert.equal(secondNeighbor.x, 0);
  //   assert.equal(secondNeighbor.y, 1);
  // });
// });
