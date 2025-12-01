//Declare Variable==========================
var x=10;
let y=20;
const z=30;
console.log(x);
console.log(y);
console.log(z);



//var vs let vs const==========================

//1.Scope
if (true) {
  var x = 10;
}
console.log(x); // 10  (still accessible)

if (true) {
  let y = 20;
  const z = 30;
}
// console.log(y); // Error: y is not defined
// console.log(z); // Error: z is not defined



//2.Re-Declaration
var a = 1;
var a = 2; // OK (but dangerous)
console.log(a); // 2



//3.Hoisting & Temporal Dead Zone
console.log(a); // undefined (var is hoisted)
var a = 10;

console.log(b); // Error: Cannot access 'b' before initialization
let b = 20;

console.log(c); // Error: Cannot access 'c' before initialization
const c = 30;



//4.considered var without Declaration
Hello=10;
console.log(Hello);



