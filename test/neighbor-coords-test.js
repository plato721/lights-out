const chai = require('chai');
const assert = chai.assert;

var neighborCoords = require('../lib/neighbor-coords');
var Board = require('../lib/board');

describe('neighborCoords', function() {

  it("gets back set of neighbor coordinates", function() {
    var board = new Board();
    var x = 1, y = 1;

    assert.equal(neighborCoords(x, y, board).length, 4);
  });

});
