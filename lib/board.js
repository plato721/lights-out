var $ = require('jquery');
var Light = require('./light');

function Board() {
  this.width = 5;
  this.element = $('.board');
  this.initLightGrid();
}

Board.prototype.initLightGrid = function(){
  var grid = this.createEmptyGrid(this.width, this.width);
  this.lightGrid = this.fillLightGrid(grid);
};

Board.prototype.fillLightGrid = function(grid) {
  var grid = grid;
  for(var i = 0; i < this.width; i++){
    for(var j = 0; j < this.width; j++){
      grid[i][j] = new Light(i, j, this);
    }
  }
  return grid;
};

Board.prototype.createEmptyGrid = function(width, height) {
  var grid = new Array(width);
  for(var i = 0; i < width; i++){
    grid[i] = new Array(height);
  }
  return grid;
};

Board.prototype.onBoard = function(x,y){
  return ((x < this.width && y < this.width) &&
          (x >= 0 && y >= 0));
};

Board.prototype.rawNeighborCoords = function(x,y){
  var raw = [[x - 1, y], [x, y - 1], [x + 1, y], [x, y + 1]];
  return raw.filter(function(coords){
    return this.onBoard(coords[0], coords[1]);
  }.bind(this));
};

Board.prototype.getNeighbors = function(light){
  return this.rawNeighborCoords(light.x, light.y).map(function(pair){
    return this.lightGrid[pair[0]][pair[1]];
  }.bind(this));
};

Board.prototype.updateNeighbors = function(light){
  this.getNeighbors(light).forEach(function(light){
    light.flipSwitch().rerender();
  }.bind(this));
};

Board.prototype.countLights = function()
{
  return this.element.find('.lit').length;
};

module.exports = Board;
