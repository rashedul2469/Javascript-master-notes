let a = 50;
try {
    if (a > 10) {
        throw new Error("Value of 'a' cannot be greater than 10");
    }

    if (a > 100) {
        throw new RangeError("Value of 'a' cannot be greater than 100");
    }
}
catch (err) {
    console.log("Error");
    console.log(err.name);
    console.log(err.messeage);
    console.log(err.message);
}
finally {
    console.log("Finally block works");
}
console.log("Hello world");
