const readlineSync = require("readline-sync");

let codepostale = new Number(readlineSync.question("code postale?"));
let age = new Number(readlineSync.question("What's your age?"));
let total = codepostale / age;
console.log(Math.trunc(total));