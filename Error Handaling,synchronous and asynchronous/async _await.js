const t1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task1 is completed");
            resolve();
        }, 2000);
    });
};

const t2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task2 is completed");
            resolve();
        }, 2000);
    });
};


let cl=async ()=>{
    await t1();
    await t2();
}

cl();