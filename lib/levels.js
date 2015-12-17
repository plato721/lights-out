var levels = require('./levels/index');
const Board = require('./board');

function Levels () {
  this.list = [];
  this.initList();
  this.blankLevel = levels["levelBlank"];
}

Levels.prototype.labelList = function() {
  return ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Level Random"];
};

Levels.prototype.initList = function(){
  this.list = [levels["level1"], levels["level2"], levels["level3"],
    levels["level4"], levels["level5"]];
};

Levels.prototype.randomRow = function() {
  var row = "";
  for(var i = 0; i < 5; i++) {
    row = row.concat(this.randomLitStatus());
  }
  return row;
};

Levels.prototype.randomLitStatus = function() {
  return parseInt(Math.round(Math.random()));
};

Levels.prototype.areEqual = function(firstLevel, secondLevel) {
  for(var i = 0; i < 5; i++) { 
    if(firstLevel[i] !== secondLevel[i]) return false;
  }
  return true;
}

module.exports = Levels;
