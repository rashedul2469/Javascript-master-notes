//Object=================================================
let user={
  name:"jhon",
  age:32,
  hobby:['reading','swimming','slepping']
}

console.log(user.name);
console.log(user['name']);


let person={
  name:"Jhon",
  age:32,
  ismarried:true,
  homeadress:{
    long:83.33,
    lat:28.2
  },
  hobby:['reading','swimming','slepping'],
  salary:10000,
  info:function(){
    console.log(`i got ${this.salary} salaries.`)
  }
}

console.log(person);
console.log(person.name);
console.log(person.homeadress.long);
console.log(person.hobby[1]);

//update,add,delete key
person.ismarried=false;       //update
person.skill="Javascript";   //add
delete person.skill;        //delete

//onject to array
console.log(Object.keys(person));
console.log(Object.values(person));



//object destructuring
let fb_user={
  name:"sami",
  email:"sami@gmail.com",
  friends:["jhon","smith","stokies"],
  setting:{
    two_step:true,
    password:"strong"
  }
}

const {name,email,setting}=fb_user;
const {two_step,password}=setting;
console.log(name,email);
console.log(two_step,password);



