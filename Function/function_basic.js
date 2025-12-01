//With No Parameter======================================

function show_my_name(){
    console.log("My name is smith");
}

show_my_name();


//With One Parameter====================================

function show_my_name_parameter(name){
    console.log(`My name is ${name}`);
}

show_my_name_parameter("Smith");


//With Multiple Parameter==============================

function show_my_name_detail(name,age,id){
    return `My name is ${name}`+` I am ${age} year old`+` My id is ${id}`;
}

console.log(show_my_name_detail("smith",22,32));


//With Default Paramenter===============================

function show_my_name_detail_default(name,age=22,id=32){
    return `My name is ${name}`+` I am ${age} year old`+` My id is ${id}`;
}

console.log(show_my_name_detail_default("smith"));


function show_my_name_detail_default_parameter(name,age=22,id=32){
    return `My name is ${name}`+` I am ${age} year old`+` My id is ${id}`;
}

console.log(show_my_name_detail_default_parameter("smith",52,102));



//With rest Parameter===================================

function get_array(...arr){
    console.log(arr);

}
get_array(1,2,3,4,5,6);


//Function expression====================================

let calculation=function(a,b){
    return a+b;
}

console.log(calculation(1,2));


//Arrow Function==========================================
let add=(a,b)=>{
    return a+b;
}
console.log(add(1,2));

let calculation_sum=(a,b,c)=> a+b+c;
console.log(calculation(1,2,3));

//Spread Operator=========================================

let calculation_sum_spread=(a,b,c)=> a+b+c;
let arr=[1,2,3];
console.log(calculation(...arr));

let arr2=[...arr,4,5,6];
console.log(arr2);

//Function inside object=================================

let user={
    name:function(){
        console.log("Hello I am Smith");
    },
    age(){
        console.log("Age is 25");

    },
    "body name"(){
        console.log("Nothing");

    }
}

user.name();
user.age();
user["body name"]();

//return object 

function studentinfo1(name,age){
    return {
        name,age
    }
}

console.log("Smith",22);


//Higher Order Function
function greet(name) {
    console.log("Hello, " + name);
}

function processUserInput(callback) {
    callback("smith");   // calling the function we got as parameter
}

//processUserInput(greet("Mahin")); not supported

processUserInput(()=>{
    greet("Mahin");
});

processUserInput(greet);


