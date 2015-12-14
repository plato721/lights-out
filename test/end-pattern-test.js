const chai = require('chai');
const assert = chai.assert;

var Board = require('../lib/board');
var endPattern = require('../lib/end-pattern');

describe("end-pattern", function(){
  function arraysAreEqual(a, b) {
    for(var i = 0; i < a.length; i++){
      if(a[i] !== b[i]) return false;
    }
    return true;
  }

  it("knows first end pattern", function() {
    var level = {
      "0" : "00000",
      "1" : "00000",
      "2" : "00000",
      "3" : "00000",
      "4" : "10001"
    };

    var board = new Board(level);

    var expected = [0,0];
    var result = endPattern(board);

    assert(arraysAreEqual(expected, result));
  });
});