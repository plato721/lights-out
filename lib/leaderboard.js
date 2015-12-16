function Leaderboard() {
  this.allScores = [];

}

Leaderboard.prototype.addScore = function(name, score) {
  this.allScores.push([name, score.points]);
  this.allScores.sort(function(first, second) {
    return second[1] - first[1];
  });
}

module.exports = Leaderboard;
