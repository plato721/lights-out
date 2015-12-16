function Leaderboard() {
  this.keep = 5;
  this.topScores = [];

}

Leaderboard.prototype.isTopScore = function(score) {
  if(this.topScores.length < this.keep) { return true; }
  var threshold = this.topScores.reverse()[0][1];
  return score.points > threshold;
};

Leaderboard.prototype.addScore = function(name, score) {
  this.topScores.push([name, score.points]);
  this.topScores.sort(function(first, second) {
    return second[1] - first[1];
  });
  this.pruneList();
};

Leaderboard.prototype.pruneList = function() {
  this.topScores = this.topScores.slice(0, this.keep);
};

module.exports = Leaderboard;
