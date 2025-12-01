//Array Built in Function============================================

let arr=['jhon','mary','smith'];
console.log(arr);
console.log(arr[0]);
console.log(arr.length);

arr.push(40);           //add element at last
arr.push(50,60);
console.log(arr); 
arr.shift();            //add element at first
console.log(arr);

arr.pop();              //delete element at last
console.log(arr);
arr.unshift();       //delete element at first
console.log(arr);


arr = [1, 2, 3, 2];
console.log(arr.indexOf(2));      // 1
console.log(arr.lastIndexOf(2));  // 3
console.log(arr.includes(3));     // true
console.log(arr.includes(5));     // false

let nums = [10, 20, 30, 40, 50];
nums.slice(1, 4);   // [20, 30, 40] (end index not included)
nums.slice(2);      // [30, 40, 50]
nums.slice(-2);     // [40, 50] (negative from end)

let a1 = [1, 2];
let a2 = [3, 4];
let a3 = a1.concat(a2);  // [1, 2, 3, 4]
console.log(a3);

let b1=['How','are','you'];
console.log(b1.join('-'));  //convert to string

//array destructuring
let [a,b,c]=[1,2,3];
console.log(a,b,c);



