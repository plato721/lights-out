var levels = require('./levels/index');

function Levels () {
  this.list = [];
  this.initList();
}

Levels.prototype.initList = function(){
  // debugger;
  this.list[0] = levels["level1"];
};

module.exports = Levels;