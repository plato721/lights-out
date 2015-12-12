const $ = require('jquery');

function DisplayMessage(){
}

DisplayMessage.prototype.showTitle = function(title){
  $('.title-message').empty().append(this.titleElement(title));
}

DisplayMessage.prototype.titleElement = function(message){
  return '<h1>' + message + '</h1>';
};

module.exports = DisplayMessage;
