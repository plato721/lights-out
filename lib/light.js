var $ = require('jquery');

function Light(x, y, board, lit) {
  this.board = board;
  this.x = x;
  this.y = y;
  this.lit = lit || false;
  this.hinted = false;

  this.render().bindClick().appendTo(this.board.element);
}

Light.prototype.isLitJSON = function() {
  return this.lit ? 1 : 0;
};

Light.prototype.render = function() {
  this.element = $(this.template());
  this.setLit();
  this.setHinted();
  return this;
};

Light.prototype.setLit = function() {
  if(this.lit) {
    this.element.find('.light').addClass('lit');
  }
};

Light.prototype.setHinted = function() {
  if(this.hinted) {
    this.element.find('.light').addClass('next-move');
  }
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
  this.lit = !(this.lit);
  return this;
};

Light.prototype.flipHinted = function() {
  this.hinted = !(this.hinted);
  return this;
};

Light.prototype.template = function() {
  return `
    <div class="cell">
      <div class="light hvr-grow">
      </div>
    </div>
  `;
};

Light.prototype.appendTo = function(target) {
  this.element.appendTo(target);
  return this;
};

module.exports = Light;
