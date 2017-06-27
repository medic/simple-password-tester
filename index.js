;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.moment = factory()
}(this, (function () { 'use strict';

  var LENGTH_MULTIPLIER = 1;
  var UNIQUE_CHARACTER_MULTIPLIER = 2;
  var UNIQUE_TYPE_MULTIPLIER = 15;
  
  var VARIATIONS = [
    /\d/,     // digits
    /[a-z]/,  // lower case
    /[A-Z]/,  // upper case
    /\W/      // other
  ];

  var scoreLength = function(pass) {
    return pass.length * LENGTH_MULTIPLIER;
  };

  var scoreUniqueCharacters = function(pass) {
    var unique = [];
    for (var i = 0; i < pass.length; i++) {
      var char = pass[i];
      if (unique.indexOf(char) === -1) {
        unique.push(char);
      }
    }
    return unique.length * UNIQUE_CHARACTER_MULTIPLIER;
  };

  var scoreVariations = function(pass) {
    var types = 0;
    for (var i = 0; i < VARIATIONS.length; i++) {
      if (VARIATIONS[i].test(pass)) {
        types++;
      }
    }
    return (types - 1) * UNIQUE_TYPE_MULTIPLIER;
  };

  return function(pass) {
    if (typeof pass !== 'string') {
      return 0;
    }
    return scoreLength(pass) +
           scoreUniqueCharacters(pass) +
           scoreVariations(pass);
  };

})));
