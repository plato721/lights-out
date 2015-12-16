function Leaderboard() {
  this.topScores = [];

}

Leaderboard.prototype.addScore = function(name, score) {
  this.topScores.push([name, score.points]);
  this.topScores.sort(function(first, second) {
    return second[1] - first[1];
  });
}

module.exports = Leaderboard;
