const readlineSync = require("readline-sync");

let q1 = (readlineSync.question("question 1 sur 5 : Quelle est ton actrice préféré ?"))
let q2 = (readlineSync.question("question 2 sur 5 : Quelle est ta couleur favorite?"))
let q3 = (readlineSync.question("question 3 sur 5 : tu aime les choux de bruxelles?"))
let q4 = (readlineSync.question("question 4 sur 5 : D'ou viens tu ?"))
let q5 = (readlineSync.question("question 5 sur 5 : comment s'appelle ta maman?"))

console.log("il était une fois  " + q1 + "  habiller  en " + q2 + "  parti au marché faire ses courses. " + q3 + "  , c'est une personne comme les autres meme si elle viens de " + q4 + 
"  tout comme  " + q5)