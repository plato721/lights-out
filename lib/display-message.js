const $ = require('jquery');

function DisplayMessage(){
}

DisplayMessage.prototype.showTitle = function(title){
  $('.title-message').empty().append(this.titleElement(title));
}

DisplayMessage.prototype.titleElement = function(message){
  return '<h1>' + message + '</h1>';
};

DisplayMessage.prototype.showScore = function(score){
  $('#score').empty().append(this.scoreElement(score));
};

DisplayMessage.prototype.scoreElement = function(score){
  return '<h1>Score: ' + score + '</h1>';
};

module.exports = DisplayMessage;
