/*
question=01=>create a game
*/
let randomNumber=23;
let userNumber=prompt("guess the number:");
while(userNumber!=randomNumber){
    userNumber=prompt("guess again.");
}
console.log("congratulations , you wins");
/*
question=02=>create a faulty calculator
it does the following:
10% of the times performs wrong operations.
1.takes two number input from user
2.+ ---> -
3.* -->+
4.- -->/
5./ -->**
*/
let random=Math.random();
console.log("value of random:",random);
let a=prompt("enter the first number:");
let b=prompt("enter the second number:");
let c=prompt("enter the operation");
let symbol={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
if(random>0.1){
    console.log(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    c=symbol[c];
    console.log(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
/*
 question-03=>create a business name generator by combining a list of adjectives and shop name and another word 
adjectives:
crazy 
amazing
fire
shop name:
engines
foods
garments
another word:
bros
limited
hub
*/
let randomNO=Math.random();
console.log(randomNO);
let first , second , third;
if(randomNO<0.33){
    first="crazy";
    second="engines";
    third="bros";
}
else if( randomNO>=0.33 && randomNO <=0.66){
    first="amazing";
    second="foods";
    third="limited";
}
else{
    first="fire";
    second="garments";
    third="hub";
}
console.log(`Business name is ${first} ${second} ${third}`);
/*question-04=>calculate the factorial of a number using for loops
*/
let i=prompt("enter the number?");let fact=1;
while(i!=0){
    fact=fact * i;
    i--;
}
console.log("factorial of the number is ",fact);
//by using reduce method
let num=3;
// function factorial(number){
//     let arr=Array.from(Array(number).keys());
//     console.log(arr);
// }->this gives array from 0 to 2
function factorial(number){
    let arr=Array.from(Array(number+1).keys());
    console.log(arr.slice(1,));
    let c=arr.slice(1,).reduce(
        (a,b)=>{
            return a*b;
        }
    )
    console.log(c);
}
factorial(num);