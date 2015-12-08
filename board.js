function Board() {
  this.width = 5;
  this.element = $('.board');
  this.initLightGrid();

}

Board.prototype.initLightGrid = function(){
  this.createEmptyGrid();
  this.fillLightGrid();
};

Board.prototype.fillLightGrid = function() {
  for(var i = 0; i < this.width; i++){
    for(var j = 0; j < this.width; j++){
      this.lightGrid[i][j] = new Light(i, j, this);
    }
  }
}

Board.prototype.createEmptyGrid = function() {
  this.lightGrid = new Array(this.width);
  for(var i = 0; i < this.width; i++){
    this.lightGrid[i] = new Array(this.width);
  }
}

Board.prototype.onBoard = function(x,y){
  return ((x < this.width && y < this.width) &&
          (x >= 0 && y >= 0));
}

Board.prototype.rawNeighborCoords = function(x,y){
  var raw = [[x - 1, y], [x, y - 1], [x + 1, y], [x, y + 1]];
  return raw.filter(function(coords){
    return this.onBoard(coords[0], coords[1]);
  }.bind(this));
}

Board.prototype.getNeighbors = function(light){
  return this.rawNeighborCoords(light.x, light.y).map(function(pair){
    return this.lightGrid[pair[0]][pair[1]];
  }.bind(this));
}

Board.prototype.updateNeighbors = function(light){
  this.getNeighbors(light).forEach(function(light){
    light.flipSwitch().rerender();
  }.bind(this));
}

Board.prototype.countLights = function()
{
  return this.element.find('.lit').length;
}
