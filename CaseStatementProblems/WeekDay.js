readline=require("readline-sync");
let day=readline.question("Enter a number between 1 to 7: ");
console.log("The weekday for "+day+" is:");
switch(day){
    case "1":console.log("sunday");
    break;
    case "2":console.log("monday");
    break;
    case "3":console.log("tuesday");
    break;
    case "4":console.log("wednesday");
    break;
    case "5":console.log("thursday");
    break;
    case "6":console.log("friday");
    break;
    case "7":console.log("saturday");
    break;
    default:console.log("Invalid input");
    break;

}
