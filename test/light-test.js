const chai = require('chai');
const assert = chai.assert;

var Light = require('../lib/light.js');
var Board = require('../lib/board.js');

describe('Light', function(){
  beforeEach(function() {
    this.board = new Board();
  });

  it("is a light", function() {
    let light = new Light(0,0, this.board);

    assert.instanceOf(light, Light);
  });

  it("has a reference to a board", function() {
    let light = new Light(1, 3, this.board);

    assert.equal(this.board, light.board);
  });

  it("is has coordinates", function() {
    let light = new Light(5, 3, this.board);

    assert.equal(light.x, 5);
    assert.equal(light.y, 3);
  });

  it("is not lit by default", function() {
    let light = new Light(2, 4, this.board);

    assert.isFalse(light.lit);
  });

  it("is lit after flipSwitch()", function() {
    let light = new Light(2, 3, this.board);

    assert.isFalse(light.lit);
    light.flipSwitch();
    assert(light.lit);
  });

  it("can be initialized as lit", function() {
    let light = new Light(3, 4, this.board, true);

    assert(light.lit);
  });

});
