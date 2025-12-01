//for each loop==========================
/*

arr.forEach((value, index, array) => {
  // your code here
});


*/

let number=[1,2,3,4,5,6,7];

number.forEach(sum);

function sum(x){
    console.log(x);
}
console.log("========================================");



//anonymous function==========================
let number1=[1,2,3,4,5,6,7];

number1.forEach(function sum(x){
    console.log(x);
});

//With multiple parameter

let number2=[1,2,3,4,5,6,7];
console.log(number2);
number2.forEach(function sum(x,index,arr){
    arr[index]=x+5;
});
console.log(number2);
console.log("========================================");



//Map function===============================
/*

let newArray = arr.map((value, index, array) => {
  return someCondition; // true => keep / false => discard
});

*/

let nums = [1, 2, 3, 4];

let squares = nums.map(n => n * n);

console.log(squares); // [1, 4, 9, 16]
console.log("========================================");



//Filter function==============================
/*

let newArray = arr.filter((value, index, array) => {
  return someCondition; // true => keep / false => discard
});

*/

let nums1 = [1, 2, 3, 4, 5, 6];

let evens = nums1.filter(n => n % 2 === 0);

console.log(evens); // [2, 4, 6]

//find function==================================

/*
array.find((value, index, array) => {
  return condition; // true → this is the one
});
*/

let nums3 = [1, 2, 3, 4, 5];

let evens3 = nums3.find(n => n % 2 === 0);
console.log(evens3);       //2
//we can also use findindex to find

console.log("======================================");






