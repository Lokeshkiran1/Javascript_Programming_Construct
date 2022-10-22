let sum=0;
for(let i=0;i<5;i++){
    let randomCheck=Math.floor(Math.random()*90);
    sum+=randomCheck;
    console.log("the random number is: "+randomCheck);
}
console.log("sum : "+sum);
let average=sum/5;
console.log("average is : "+average);