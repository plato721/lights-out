var move = require('./next-move');

function Hint(game) {
  this.game = game;
  this.hintLit = false;
  this.hintLight;
};

Hint.prototype.showHint = function(board) {
  var nextMove = move.forBoard(this.game.board)
  this.game.score.cheat();
  if(this.game.gameIsLost()) {
    this.game.processLoss();
    return;
  }
  this.hintLight = this.game.board.lightGrid[nextMove[0]][nextMove[1]];
  this.hintLit = true;
  this.hintLight.flipHinted().rerender();
  this.game.displayMessage.showScore(this.game.score.points);
};

Hint.prototype.clearHint = function() {
  if(this.hintLit) {
    this.hintLight.flipHinted().rerender();
    this.hintLit = false;
  }
}

module.exports = Hint;
