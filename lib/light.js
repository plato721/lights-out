var $ = require('jquery');

function Light(x, y, board, lit) {
  this.board = board;
  this.x = x;
  this.y = y;
  this.lit = lit || false;

  this.render().bindClick().appendTo(this.board.element);
}

Light.prototype.render = function() {
  this.element = $(this.template());
  return this;
};

Light.prototype.rerender = function() {
  this.element.replaceWith(this.render().bindClick().element);
  return this;
};

Light.prototype.bindClick = function() {
  this.element.find('.light')
  .on('click', function () {
    this.flipSwitch().rerender();
    this.board.updateNeighbors(this);
  }.bind(this));

  return this;
};

Light.prototype.flipSwitch = function() {
  if(this.lit) {
    this.lit = false;
  } else {
    this.lit = true;
  }
  return this;
};

Light.prototype.template = function() {
  if (this.lit) {
    return `
      <div class="cell">
        <div class="light lit">
        </div>
      </div>
    `;
  } else {
    return `
      <div class="cell">
        <div class="light">
        </div>
      </div>

    `;
  }
};

Light.prototype.appendTo = function(target) {
  this.element.appendTo(target);
  return this;
};

module.exports = Light;
