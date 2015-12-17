const $ = require('jquery');

function DisplayMessage(){
}

DisplayMessage.prototype.showWinMessage = function(){
  var div = $('#post-game');
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
  var div = $('#post-game');
  div.empty()
     .show()
     .append(`<h1>High Score!</h1>
              <p>Name:</p>
              <input class='input'></input>
              <button id="high-submit-button">Submit</button>`
            );
  div.unbind('click').on('click', 'button', function() {
    var input = $('.input').val();
    game.getName(input, leaderboard);
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
