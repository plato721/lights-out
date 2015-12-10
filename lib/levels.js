var levels = require('./levels/index');

function Levels () {
  this.list = [];
  this.initList();
}

Levels.prototype.initList = function(){
  this.list = [levels["level1"], levels["level2"], levels["level3"],
    levels["level4"], levels["level5"]];
};

module.exports = Levels;