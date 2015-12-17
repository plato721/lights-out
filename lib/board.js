var $ = require('jquery');
var Light = require('./light');
var Levels = require('./levels');
var neighborCoords = require('./neighbor-coords');
var coords = require('./relative-coords.js');

function Board(level) {
  this.width = 5;
  this.element = $('.board');
  this.levelsGenerator = new Levels();
  this.level = level || this.randomLevel();
  this.clearGrid();
  this.initLightGrid();
}

Board.prototype.clearGrid = function () {
  $('.board').empty();
};

Board.prototype.randomLevel = function() {
  var board = new Board(this.levelsGenerator.blankLevel);
  var clicks = Math.floor(Math.random() * 98) + 2;
  board = this.randomClickIterations(board, clicks)
  return board.toJSON();
}

Board.prototype.randomClickIterations = function(board, clicks) {
  for(var i = 0; i < clicks; i++) {
    var light = this.randomLight(board);
    light.flipSwitch();
    board.updateNeighbors(light);
  }
  return board;
};

Board.prototype.randomLight = function(board) {
  var randomCoords = coords.random();
  return board.lightGrid[randomCoords[0]][randomCoords[1]];
};

Board.prototype.jsonLitStatus = function (x, y) {
  var row = this.level[parseInt(y)];
  return row[x];
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
  for(var j = 0; j < this.width; j++){
    for(var i = 0; i < this.width; i++){
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

Board.prototype.equals = function(other) {
  for(var i = 0; i < this.width; i++) {
    for(var j = 0; j < this.width; j++) {
      if(this.lightGrid[i][j].lit !== other.lightGrid[i][j].lit) return false;
    }
  }
  return true;
};

Board.prototype.getNeighbors = function(light){
  return neighborCoords(light.x, light.y, this).map(function(pair){
    return this.lightGrid[pair[0]][pair[1]];
  }.bind(this));
};

Board.prototype.updateNeighbors = function(light){
  this.getNeighbors(light).forEach(function(light){
    light.flipSwitch().rerender();
  }.bind(this));
};

Board.prototype.countLights = function() {
  return this.element.find('.lit').length;
};

Board.prototype.rowToJSON = function(y) {
  var converted = ""
  for(var x = 0; x < this.width; x++) {
    converted += this.lightGrid[x][y].isLitJSON();
  }
  return converted;
};

Board.prototype.toJSON = function() {
  var level = {};
  for(var y = 0; y < this.width; y++) {
    level[y] = this.rowToJSON(y);
  }
  return level;
};

module.exports = Board;
