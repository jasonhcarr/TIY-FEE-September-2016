(function($) {
  "use strict";

})(jQuery);
;/* SRC/game.js */
function Game() {
  this.test = 'apple'
}

module.exports = Game;
;/* SRC/romannumerals.js */
function romanNumerals(num) {
  if (num === 1) {
    return 'I';
  } else if(num === 2) {
    return 'II';
  } else if (num === 4) {
    return 'IV';
  }
}

module.exports = romanNumerals;
