const chai = require('chai');
const assert = chai.assert;

var Messages = require('../lib/messages')


describe("Messages", function() {
  it("has a title message", function() {
    var messages = new Messages();

    assert.ok(messages.title);
  });

  it("has a you won message", function() {
    var messages = new Messages();

    assert.ok(messages.win);
  });
});