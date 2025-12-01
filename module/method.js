//For method

//Export Default ================================
let fun=()=>{
    console.log("Hello world");
}

export default fun;


//Export ================================
let fun1=()=>{
    console.log("I am in fun1");
}

let fun2=()=>{
    console.log("I am in fun2");
}


export {fun1,fun2};


//Export before function ===================================
export let fun3=()=>{
    console.log("I am in fun3");
}

export let fun4=()=>{
    console.log("I am in fun4");
}



//for class the stragety will be same...

