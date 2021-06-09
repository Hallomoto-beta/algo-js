const readlineSync = require("readline-sync");

let age = new Number(readlineSync.question("quel age-tu?"));

if (age < 18)  {
  console.log("vous n'etes pas encore majeur :-)");
}