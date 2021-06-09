"use strict";

var readlineSync = require("readline-sync");

function nbre_pairs(nbre_max) {
  var i = 0,
      p = [],
      m = nbre_max + 1;

  while (i++ < m) {
    !(i & 1) && p.push(i);
  }

  ;
  return p.join('-');
}

console.log(nbre_pairs(100));