//for-loop===================================
for(let i=0;i<10;i++){
    console.log("Hello world");
}
console.log("=======================================");

//Nested for-loop===========================
for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        console.log("Bye world");
    }
    console.log("Hello world");
}
console.log("=======================================");

//While-Loop================================
let index=1;
while(index<10){
    console.log(index);
    index++;
}

console.log("=======================================");

//Do-While-Loop================================
index=1;
do{
    console.log(index);
    index++;

}while(index<10)

console.log("=======================================");

//for-in loop==================================

let numbers=[10,20,30,40,50];

for(let index in numbers){
    console.log(numbers[index]);
}

let obj={
    name:"Smith",
    id:23,
    age:44
}

for(let key in obj){
    console.log(obj[key]);
}
console.log("=======================================");

//for-of loop=================================
for(let item of numbers){
    console.log(item);
}

for (let ch of "Mahin") {
  console.log(ch);
}
console.log("=======================================");

//break and continue

for(let i=0;i<10;i++){
    if(i==5) break;
    console.log("Hello world");
}

for(let i=0;i<10;i++){
    if(i==5) continue;
    console.log("Hello world");
}


    