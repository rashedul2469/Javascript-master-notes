/*const promise=new Promise((resolve,reject)=>{
    if(true){
        resolve("Success");
    }
    else{
        reject("Not successful");
    }
})

promise.then(
    (res)=>{
        console.log(res);
    }
)
.catch((res)=>{
    console.log(res);
})

*/

//Multiple Promise=========================================
/*
function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Login Successfully");
            resolve();
        }, 1000);
    });
}

function home() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Visit home page");
            resolve();
        }, 1000);
    });
}

function profile_visit() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Visit profile page");
            resolve();
        }, 1000);
    });
}


login()
.then(() => home())
.then(() => profile_visit())
.then(() => {
    console.log("Flow completed");
})
.catch((err) => {
    console.log("Error:", err);
});

*/


//all and race ==========================================
const promise1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1);
    }, 2000);
})

const promise2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(2);
    }, 5000);

})

Promise.all([promise1,promise2])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log("There is an error");
});

Promise.race([promise1,promise2])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log("There is an error");
});
