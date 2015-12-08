
function main(){
  function board() {
  // this.width = 5;
  // this.lightGrid = Array.new(width);
  // this.container = $('.board');
  this.element = $('.board');

    for(var i = 0; i < 5; i++){
      for(var j = 0; j < 5; j++){
        new Light(i, j, this);
      }
    }
  }

  // Board.prototype.countLights = function()
  // {

  // }

  function Light(x, y, board) {
    this.board = board.element;
    this.x = x;
    this.y = y;
    this.lit = false;

    this.render().bindClick().appendTo(this.board);
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
      this.lightSwitch().rerender();
    }.bind(this));

    return this;
  };

  Light.prototype.lightSwitch = function() {
    if(this.lit) {
      this.lit = false;
    } else {
      this.lit = true;
    }
    return this;
  }

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

      `
    }
  }

  Light.prototype.appendTo = function(target) {
    this.element.appendTo(target);
    return this;
  }

  // function gameIsWon(board){

  // }

  // board = new Board();
  board();
}

$(document).ready(main);



