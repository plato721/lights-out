function Leaderboard() {
  this.allScores = [];

}

Leaderboard.prototype.addScore = function(name, score) {
  if(this.allScores.length == 0){
    this.allScores.push([name, score.points]);
    return;
  }
  // for(var i = 0; i < this.allScores.length; i++) {

  // }
}

module.exports = Leaderboard;