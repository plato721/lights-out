module.exports = {
  basicWin : function() {
    return `<h1>You Win!</h1>
            <p>Click to play the next level.</p>`;
  },

  highScoreWin : function() {
    return `<h1>High Score!</h1>
            <p>Name:</p>
            <input class='input'></input>
            <button id="high-submit-button">Submit</button>`;
  },

  gameOver : function() {
    return `<h1>Game Over!</h1>
        <p>Choose a level to try again.</p>`;
  }
};
