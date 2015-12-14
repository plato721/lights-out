module.exports = {
  below : function(coords) {
    return [coords[0], coords[1] + 1];
  },

  above : function(coords) {
    return [coords[0], coords[1] - 1];
  },

  right : function(coords) { 
    return [coords[0] + 1, coords[1]];
  },

  left : function(coords) {
    return [coords[0] - 1, coords[1]];
  }
}