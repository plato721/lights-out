const chai = require('chai');
const assert = chai.assert;

const relativeCoords = require('../lib/relative-coords');

describe("relativeCoords", function() {
  function arraysAreEqual(a, b) {
    for(var i = 0; i < a.length; i++){
      if(a[i] !== b[i]) return false;
    }
    return true;
  }

  it("knows left coords for coords", function() {
    var x = 1, y = 1;

    var result = relativeCoords.left([x, y]);
    assert(arraysAreEqual(result, [x - 1, y]));
  });

  it("knows right coords for coords", function() {
    var x = 1, y = 1;

    var result = relativeCoords.right([x, y]);
    assert(arraysAreEqual(result, [x + 1, y]));
  });

  it("knows coords below given coords", function() {
    var x = 2, y = 0;

    var result = relativeCoords.below([x, y]);
    assert(arraysAreEqual(result, [x, y + 1]));
  });

  it("knows coords above given coords", function() {
    var x = 1, y = 1;

    var result = relativeCoords.above([x, y]);
    assert(arraysAreEqual(result, [x, y - 1]));
  });
});
