function Board() {
  this.width = 5;
  this.lightGrid = Array.new(width);

  for(var i = 0; i < this.width; i++){
    for(var j = 0; i < this.width; j++){
      new Light(i, j, board);
    }
  }

}

Board.prototype.countLights = function()
{

}

function Light(x, y, board) {
  this.board = board;
  this.x = x;
  this.y = y;
}

Light.prototype.clickResponse = function(){
}
Light.prototype.toggleLight = function(){

}


function gameIsWon(board){

}