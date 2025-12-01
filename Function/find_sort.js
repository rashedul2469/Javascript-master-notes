//sort and reverse=============================================
let number=[1,2,3,4,5,10];

number.sort((a, b) => a - b).reverse();
console.log(number);

//every and some=========================================================

let num1=[1,-3,4,5];

let get1=num1.every((x)=>{
    return x>0;
});

console.log(get1);

let get2=num1.some((x)=>{
    return x>0;
});

console.log(get2);

//reduce==================================================================


/*
array.reduce((accumulator, currentValue, index, array) => {
  // return new accumulator
}, initialValue);

*/


/*
let sum=0;
let arr=[1,2,3,4,5];

for(let x of arr){
    sum+=x;
}
*/

let nums = [1, 2, 3, 4];

let sum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10
