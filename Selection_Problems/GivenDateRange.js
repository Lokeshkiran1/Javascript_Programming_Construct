var readline=require("readline-sync");
let day=readline.question("Enter the date of the month: ");
let month=readline.question("Enter the month: ");
if ((day>=20 && month>=3)&&(day<=20 && month<=6))
console.log("true");
else
console.log("false");