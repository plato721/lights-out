module.exports = {
  arraysAreEqual : function(a, b) {
    for(var i = 0; i < a.length; i++){
      if(a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  },

  connectWithDots : function(a, b) {
    var totalLength = 40;
    var dotLength = totalLength - a.length - b.length;
    var dots = "";
    for(var i = 0; i < dotLength; i++) {
      dots = dots.concat('.');
    }
    return (a + dots + b);
  }
};
