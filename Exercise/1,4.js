const readlineSync = require("readline-sync");


let userName = readlineSync.question("What's your name?");
let age = readlineSync.question("What's your age?");
let city = readlineSync.question("where do you live?");

console.log("hello  " + userName + age + "de " + city);clear
