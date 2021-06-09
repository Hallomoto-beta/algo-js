const readlineSync = require("readline-sync");

let min = new Number(readlineSync.question("a quel age es ton majeur ?"));
let max =  new Number(readlineSync.question("Jusqu'a quelle age peut-on vivre ? "));
let current =  new Number(readlineSync.question("quelle age as tu ? "));

if (min > max) {
    console.log("toi tu connais pas la loi ...");
}
else if (( current >= min) && (current <= max)) {
    console.log(" felicitation, tu es majeur");
}
else {
    console.log("non tu n'est pas si vieux, essaye encore");
}