let max=100;
let min=999;
for(var i=1;i<=5;i++){
    let randomNumber=Math.floor(Math.random()*900)+100;
    console.log("the number is: "+randomNumber);
    if(randomNumber>max){
        max=randomNumber;
    }
    if(randomNumber<min){
        min=randomNumber;
    }
}
console.log("Minimum number is : "+min);
console.log("Maximum number is : "+max);