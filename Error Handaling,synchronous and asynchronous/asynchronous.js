/*
//Synchronous Program
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");

//Asynchronous program
console.log("Hello");
setTimeout(() => {
    console.log("Hello");
}, 2000);
console.log("Hello");


//callback
let profile=()=>{
    console.log("Visit profile");
}

let login=(callback)=>{
    setTimeout(() => {
    console.log("Login");
    callback();
}, 2000);
}

profile(login);
*/


//callback hell

let home=(callback)=>{
    setTimeout(()=>{
        console.log("Visit home page");
        callback();
    }, 2000);
}


let profile_visit=()=>{
    setTimeout(() => {
        console.log("Visit profile page");
    }, 2000);
}

let Login=(callback)=>{
    setTimeout(() => {
        console.log("Login Successfully");
        callback();
    }, 2000);
}

Login(() => home(profile_visit)); // passes a function to be called later







