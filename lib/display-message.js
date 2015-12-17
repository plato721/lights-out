var DisplayLeaderboard = require('./display-leaderboard');
const templates = require('./message-templates');
const $ = require('jquery');

function DisplayMessage(){
  this.element = $('#post-game');
}

DisplayMessage.prototype.showBoardMessage = function(template) {
  var div = this.element;
  div.empty()
     .show()
     .append(template);
};

DisplayMessage.prototype.showWinMessage = function(){
  var div = this.element;
  div.empty()
     .show()
     .append(`<h1>You Win!</h1>
              <p>Click to play the next level.</p>`
            );
  div.on('click', function(){
    div.hide();
  });
};

DisplayMessage.prototype.showHighScoreMessage = function(game, leaderboard){
  this.showBoardMessage(templates.highScoreWin);
  div.unbind('click').on('click', 'button', function() {
    var input = $('.input').val();
    game.getName(input, leaderboard);
    if(leaderboard.name === 'Level Random'){ 
      new DisplayLeaderboard(leaderboard);
    }
    div.hide();
  });
};

DisplayMessage.prototype.showScore = function(score){
  $('#score').empty().append(this.scoreElement(score));
};

DisplayMessage.prototype.scoreElement = function(score){
  return '<h1>Score: ' + score + '</h1>';
};

module.exports = DisplayMessage;
