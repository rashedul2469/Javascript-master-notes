//if-else statement===================================================
let mark=66;
if(mark>80){
  console.log("A+");

}
else if(mark>=75 && mark<80){
  console.log("A");

}
else if(mark>=70 && mark<75){
  console.log("A-");
  
}
else if(mark>=65 && mark<70){
  console.log("B+");
  
}
else{
  console.log("F");
}

//switch-case=========================================================
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName);

//Ternary Operator======================================================
let num1=10;
let max=num1%2==0 ? "even":"odd";
console.log(max);

let number=9;
let game=(number%3==0 && number%5==0) ? "FizzBuzz":(number%3==0) ? "Fizz":(number%5==0) ? "Buzz":"Nothing";
console.log(game);




