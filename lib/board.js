var $ = require('jquery');
var Light = require('./light');
var Levels = require('./levels');

function Board(level) {
  this.width = 5;
  this.element = $('.board');
  this.levelsGenerator = new Levels();
  this.level = level || this.randomLevel();
  this.initLightGrid();
}

Board.prototype.randomLevel = function(){
  return this.levelsGenerator.random();
}

Board.prototype.jsonLitStatus = function (x, y) {
  var row = this.level[parseInt(x)];
  return row[y];
};

Board.prototype.getLit = function(x, y) {
  if(this.jsonLitStatus(x, y) === "1") {
    return true;
  } else {
    return false;
  }
};

Board.prototype.initLightGrid = function(){
  var grid = this.createEmptyGrid(this.width, this.width);
  this.lightGrid = this.fillLightGrid(grid);
};

Board.prototype.fillLightGrid = function(grid) {
  for(var i = 0; i < this.width; i++){
    for(var j = 0; j < this.width; j++){
      var lit = this.getLit(i, j);
      grid[i][j] = new Light(i, j, this, lit);
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
