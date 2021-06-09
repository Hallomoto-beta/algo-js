const readlineSync = require("readline-sync");

let shoes = new Number(readlineSync.question("quel pointure fais-tu?"));
let age = new Number(readlineSync.question("de quel année est tu ?"));
let rep1 = shoes * 2;
let rep2 = rep1 + 5;
let rep3 = rep2 * 50;
let rep4 = rep3 - age;
let rep5 = rep4 + 1766;
console.log(rep5);