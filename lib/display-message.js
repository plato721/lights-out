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
}

DisplayMessage.prototype.showHighScoreMessage = function(){
  var div = $('#post-game');
  div.empty()
     .show()
     .append(`<h1>High Score!</h1>
              <p>What's your name?</p>
              <input class='input'></input>
              <button>Submit</button>`
            );

  div.on('click', 'button', function(){
    div.hide();
  });
}

DisplayMessage.prototype.showScore = function(score){
  $('#score').empty().append(this.scoreElement(score));
};

DisplayMessage.prototype.scoreElement = function(score){
  return '<h1>Score: ' + score + '</h1>';
};

module.exports = DisplayMessage;
