
function main(){
  function board() {
  // this.width = 5;
  // this.lightGrid = Array.new(width);
  // this.container = $('.board');

    for(var i = 0; i < 5; i++){
      for(var j = 0; j < 5; j++){
        // var light = new Light(i, j, board);
        $(renderLight())
          .find('.light')
          .on('click', function () {
            $(this).toggleClass('lit');
          })
          .end()
          .appendTo($('.board'));
      }
    }
  }

  function renderLight(){  //temporary for testing
    return `
      <div class="cell">
        <div class="light">
        </div>
      </div>
    `;
  }

  // Board.prototype.countLights = function()
  // {

  // }

  // function Light(x, y, board) {
  //   this.board = board;
  //   this.x = x;
  //   this.y = y;
  // }

  // Light.prototype.clickResponse = function(){
  // }
  // Light.prototype.toggleLight = function(){

  // }


  // function gameIsWon(board){

  // }

  board();
}

$(document).ready(main);



