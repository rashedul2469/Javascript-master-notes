/*
{
   "key":value,
   "key":value,
   ...........
}

*/

let data=require("./basic.json");
console.log(data);

console.log(data.name);
console.log(data.skills[0]);
console.log(data.address.city);


console.log(data.skills[0]);
data.skills[0]="Javascript";
console.log(data.skills[0]);

delete data.salary;
console.log(data);


const data2={
    name:"Smith",
    age:22
}

console.log(JSON.stringify(data2)); //js to json
console.log(JSON.parse('{"name":"Smith","age":22}'));  //json to js