var levels = require('./levels/index');

function Levels () {
  this.list = [];
  this.initList();
}

Levels.prototype.initList = function(){
  this.list = [levels["level1"], levels["level2"], levels["level3"],
    levels["level4"], levels["level5"]];
};

Levels.prototype.random = function() {
  var level = {};
  for(var i = 0; i < 5; i++) {
    level[i] = this.randomRow();
  }
  return level;
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