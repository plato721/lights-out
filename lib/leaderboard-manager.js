var Leaderboard = require('./leaderboard');

function LeaderboardManager(levels) {
  this.levels = levels;
  this.list = [];
  this.initList();
}

LeaderboardManager.prototype.initList = function() {
  var levelNames = this.levels.labelList();
  for(var i = 0; i < levelNames.length; i++) {
    this.list.push(new Leaderboard(levelNames[i]));
  }
};

module.exports = LeaderboardManager;
