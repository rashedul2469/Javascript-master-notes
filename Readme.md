# JavaScript Documentation
## 📌 Table of Contents

- [Show Output/Input](#show-outputinput)
- [Variable Declaration](#variable-declaration)
- [Data Type](#data-type)
- [Data Type Conversion](#data-type-conversion)
- [Number Built-in Function](#number-built-in-function)
- [String Access](#string-access)
- [String Built-in Function](#string-built-in-function)
- [String Operation](#string-operation)
- [Array Initialization](#array-initilization)
- [Array Built-in Function](#array-built-in-function)
- [Object Initialization](#object-initilization)
- [Object Built-in Function](#object-built-in-function)
- [Object Destructuring](#object-destructuring)
- [Operator](#operator)
- [Conditional Logic](#conditional-logic)
- [Loop](#loop)
- [Function](#function)
- [Function Related Built-in Function](#function-related-built-in-function)
- [Object Oriented Programming](#object-oriented-programming)
- [Error Handaling](#error-handaling)
- [Synchronous Programming](#synchronous-programming)
- [Asynchronous Programming](#asynchronous-programming)
- [Module](#module)
- [Data Structure](#data-structure)
- [Document Object Model](#document-object-model)
- [Browser Object Model](#browser-object-model)
- [JavaScript Object Notation](#javascript-object-notation)
- [WebStorage](#webstorage)
- [Connection Between Frontend and Server](#connection-between-frontend-and-server)


## Show Output/Input
```javascript
console.log();
alert();
prompt();   //consider string as a input
```
<b>File :</b> <mark>Basic->show_input_output.js</mark>



## Variable Declaration
There are three ways to delare variable:
<ul>
<li>let
<li>var
<li>const
</ul>

```javascript
var x = 10;
let y = 20;
const z = 30;
```
<b>File :</b> <mark>Basic->variable_declaration.js</mark>


## Data Type
Data types are given below:
<ul>
<li>Number
<li>String
<li>Boolean
<li>Object
</ul>

```javascript
let a = 42;               //Number
let b = 3.1416;           //Number
let c = NaN;             //0/0(Number)
let d = Infinity;        //1/0(Number)
let isStudent = true;    //Boolean
let user=null;          //object
let str="Hello world"   //String
```


## Data Type Conversion

```javascript
Number();
String();
Boolean();
```
<b>File :</b> <mark>Basic->data_type_and_its_convesion.js</mark>

## Number Built-in Function
```javascript
number.toFixed();
number.toPrecision();
```
<b>File :</b> <mark>Basic->number_and_string.js</mark>

## String Access
```javascript
console.log(str[0]);
```

## String Built-in Function
```javascript
str.length;
str.charAt();
str.at();
str.codePointAt();

str.startsWith();
str.includes();
str.endsWith();

str.toUpperCase();
str.toLowerCase();

str.slice();

str.trim();
str.trimStart();
str.trimEnd();  

str.search();
str.indexOf();
str.lastIndexOf();

str.replace();
str.replaceAll()

str.repeat()

str.padStart();
str.padEnd();

str.split();
```



## String Operation
```javascript
str="It 'is' raining";

str='It \'is\' raining';

str="\tIt 'is' \nraining";

str="It \\'is' raining";

str="smith";
console.log(`My name is ${str}`);

str=`hi
how are you?`;
console.log(str);
```
<b>File :</b> <mark>Basic->number_and_string.js</mark>





## Array initilization
```javascript
let arr=[dt1,dt2,......];
```
## Array Access
```javascript
console.log(arr[0]);
```

## Array Built-in Function

```javascript
arr.length;
 
arr.push();
arr.shift();  

arr.pop();              
arr.unshift();      

arr.indexOf();
arr.lastIndexOf();
arr.includes();

arr.slice(); 
arr1.concat(arr2);
arr.join();
```
<b>File :</b> <mark>Basic->array.js</mark>




## Object Initilization
```javascript
{
    key:value
    key:value
    ...
}
```

## Object Access/Add/Update/Delete
```javascript
obj.key;
obj.key.key; //nested object
obj.key[0]; //if value is array

obj.key =" "; //add or update
delete obj.key; //delete
```

## Object Built-in Function
```javascript
Object.keys();
Object.values();
```

## Object destructuring
```javascript
const {name1,name2,name3,.....}=obj_name/key_name;
console.log(name1/name2/name3);
```
<b>File :</b> <mark>Basic->Object.js</mark>




## Operator
There are many kinds of operator:
<ul>
<li>Arithmatic
<li>Assignment
<li>Unary
<li>Comparison or Relational
<li>Logical
<li>Bitwise Operators
</ul>

### Arithmatic Operator
```javascript
+ - * ** / %
```

### Assignment Operator
```javascript
= += -= *= **= /= %=
```

### Unary Operator
```javascript
++ --
```

### Comparison or Relational Operator
```javascript
== === != !== > >= < <=
```

### Logical Operator
```javascript
&& || !
```

### Bitwise Operator
```javascript
& | ^ ~ << >> >>>
```
<b>File :</b> <mark>Operators</mark>





## Conditional Logic
<ul>
<li>if-else 
<li>switch-case
<li>Ternary Operator
</ul>

### if-else Structure
```javascript
if(condition){
    //code here
}
else if(condition){
    //code here
}
...
...
else{
    //code here
}
```
### switch case structure

```javascript
switch(val){
    case check1:
        //code here
        break;
    case check2:
        //code here
        break;
    case check3:
        //code here
        break;
    default:
        //code here
}
```

### Ternary operator structure

```javascript
let user=(condition1)? result1:(condition2)? result2......:result3
```
<b>File :</b> <mark>Control Statement->condition.js</mark>






## Loop
<ul>
<li>for-loop
<li>for..in-loop
<li>for..of-loop
<li>while-loop
<li>do..while-loop
</ul>

### for-loop Structure
```javascript
for(varaible_init;condition;Inc/Dec){
    //code here
}
```
### for..in loop structure

```javascript
for(variable in obj){
    //code here
}
```

### for..of-loop Structure

```javascript
for(varaible of arr/str){
    //code here
}
```
### while-loop structure

```javascript
while(condition){
    //code here
}
```

### do...while-loop Structure

```javascript
do{
    //code here
}while(condition)
```
<b>File :</b> <mark>Control Statement->loops.js</mark>





## Function
<ul>
<li>Function without parameter
<li>Function with parameter
<li>Function with return
<li>Function with default parameter
<li>Function with rest parameter
<li>Function expression
<li>Arrow Function
<li>Spread Operator
<li>Higher Order Function
<li>Anonymous function
</ul>

### Function without parameter Structure
```javascript
function name(){
    //code here
}

name();
```


### Function with parameter Structure
```javascript
function name(par1,par2,....){
    //code here
}

name(agr1,agr2,agr3,.....);
```


### Function with return Structure
```javascript
function name(par1,par2,....){
    //code here
    return ....;
}

name(agr1,agr2,agr3,.....);
```


### Function expression Structure
```javascript
let calculation=function(.....){
    //code here
}

calculation(1,2);
```


### Arrow Function Structure
```javascript
let add=(.....)=>{
    //code here
}
add(1,2)
```


### Function with default parameter Structure

```javascript
function name(par1,par2,par3=..,par4=..){
    //code here
}

name(agr1,agr2,agr3,.....);
```


### Function with rest parameter Structure

```javascript
function get_array(...arr){
    //code here

}

get_array();
```


### Spread Operator Structure

```javascript
let add=(......)=>{
    //code here
}
let arr=[.....];
add(...arr);
```


### Higher Order Function Structure

```javascript
function greet(..) {
    //code here
}

function processUserInput(callback) {
    callback(......);   
}

processUserInput(()=>{  //Anonymous Function
    greet(......);
});
```
<b>File :</b> <mark>Function->function_basic.js</mark>

## Function related Built-in Function

```javascript
arr.forEach((value, index, array)=>{

    //code here

});
```

```javascript
arr.reduce((accumulator, currentValue, index, array)=>{

     return new accumulator

}, initialValue);
```

```javascript
arr.map((value, index, array) => {

    return someCondition; 
});
```

```javascript
arr.filter((value, index, array) => {

    return Condition;

});
```

```javascript
arr.find((value, index, array) => {

    return condition; // true → this is the one

});
```

```javascript
arr.sort((a, b) => a - b)
```

```javascript
arr.reverse();
```

```javascript
arr.every((x)=>{

    return condition;

});
```

```javascript
arr.some((x)=>{

    return condition;

});
```
<b>File :</b> <mark>Function->find_sort.js</mark></br>
<b>File :</b> <mark>Function->forEach_map_filter_find.js</mark>


## Object Oriented Programming
<ul>
<li>Class and Object
<li>Inheritance
<ul>
<li>Single Inheritance
<li>Multilevel inheritance
<li>Hierarchical Inheritance
</ul>
</li>
<li>Encapsulation
<li>Polymorphism
</ul>



### Class and Object
```javascript
class user{
    static role ="";
    constructor(par1,par2,...){
        //code here
    }
    method_name(){
        //code here
    }
    static method_name2(){
        //code here
  }

}

const ob=new user(arg1,arg2,...);

ob.var;
ob.method_name();
user.role;
user.method_name2();
```
<b>File :</b> <mark>OOP->class_object.js</mark></br>

### Single Inheritance
```javascript
class AnimaL {
  //code here 
}

class Dog extends AnimaL {
    //code here 
  
}
```

### Multilevel inheritance
```javascript
class animal {
    //code here 
  
}

class DoG extends animal {
    //code here 
  
}

class GermanShepherd extends DoG {
    //code here 
  
}

```

### Hierarchical Inheritance
```javascript
class Animal {
    //code here 
  
}

class dog extends Animal {
    //code here 
  
}

class Cat extends Animal {
    //code here 
  
}
```
<b>File :</b> <mark>OOP->inheritance.js</mark></br>

### Encapsulation
```javascript
class BankAccount {
  #balance = 0;   

  #deposit(amount) {  
    //code here  
    
  }

}
```
<b>File :</b> <mark>OOP->encapsulation.js</mark></br>

### Polymorphism
```javascript
class Animal {
  speak() {
    //code here 
  }
}

class Dog extends Animal {
  speak() {
    //code here
  }
}
```
<b>File :</b> <mark>OOP->polymorphism.js</mark></br>


## Error Handaling
```javascript
try {
    if (condition) {
        throw new Error("Message");
    }

    if (condition) {
        throw new RangeError("Message");
    }
}
catch (err) {
    //code here
}
finally{
    //code here
    
}
```
<b>File :</b> <mark>Error Handaling,synchronous and asynchronous->error_handaling.js</mark></br>


## Synchronous Programming

```javascript
statement1
statement2
......
..
```



## Asynchronous Programming

```javascript
statement1
statement2
statement4
statement5
statement3
........
....
```

#### Example:
```javascript
setTimeout(()=>{

},milisecond);
```

<ul>
<li>Callback Function
<li>Promise
<li>Async and await
</ul>

### Callback Function
```javascript
let home=(callback)=>{
    setTimeout(()=>{
        //code here
        callback();
    }, 2000);
}

let profile_visit=()=>{
    setTimeout(() => {
        //code here
    }, 2000);
}

let Login=(callback)=>{
    setTimeout(() => {
        //code here
        callback();
    }, 2000);
}

Login(() => home(profile_visit));
```
<b>File :</b> <mark>Error Handaling,synchronous and asynchronous->asynchronous.js</mark></br>

### Promise 
```javascript
function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            //code here
            resolve();
        }, 1000);
    });
}

function home() {
    return new Promise((resolve) => {
        setTimeout(() => {
            //code here
            resolve();
        }, 1000);
    });
}

function profile_visit() {
    return new Promise((resolve) => {
        setTimeout(() => {
            //code here
            resolve();
        }, 1000);
    });
}


login()
.then(() => home())
.then(() => profile_visit())
.then(() => {
    
})
.catch((err) => {
    
});
```
<b>File :</b> <mark>Error Handaling,synchronous and asynchronous->promise.js</mark></br>

### Async and await 
```javascript
const t1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // code here
            resolve();
        }, 2000);
    });
};

const t2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // code here
            resolve();
        }, 2000);
    });
};


let cl=async ()=>{
    await t1();
    await t2();
}

cl();
```
<b>File :</b> <mark>Error Handaling,synchronous and asynchronous->async_await.js</mark></br>


## Module
```javascript
export default function_name/class_name;

import function_name/class_name from "fie location";
```

```javascript
export {function_name/class_name,......};

import {function_name/class_name,...} from "fie location";
```

```javascript
export  default function/class;
export  function/class;

import function_name/class_name from "fie location";
import {function_name/class_name,....} from "fie location";
```

### File Location Indentify
<ul>
<li>. current folder
<li>.. go back from current folder
<li>... go back twice from current folder
</ul>

<b>File :</b> <mark>module->method.js</mark></br>



## Data Structure
<ul>
<li>Array
<li>Object
<li>Map
<li>WeakMap
<li>Set
<li>WeakSet
</ul>

### Map

```javascript
let mp=new Map();
mp.set("Key","value");

mp.size;
mp.get("Key");
mp.has("Key");

mp.keys();
mp.values();
mp.entries();

mp.delete("Key");
mp.clear();
```

### WeakMap

```javascript
let weakMap = new WeakMap();

weakMap.set(obj,"value");

weakMap.get(obj);
weakMap.has(obj);
weakMap.delete(obj);
```

### Set

```javascript
let set=new Set();

set.add("item");

set.size;
set.has("item");

set.delete("item");
set.clear();

```

### WeakSet

```javascript
let weakset=new WeakSet();

weakset.add(obj);

weakset.has(obj);

weakset.delete(obj);
```

<b>File :</b> <mark>Basic->set,weakset,map,weakmap.js</mark></br>
## Document Object Model

### Select Html Element

```javascript
document.getElementById("id_name");
document.getElementsByTagName("tag_name");
document.getElementsByClassName("class name");
document.querySelector("#id .class tag_name");
document.querySelectorAll("#id .class tag_name");

element.parentElement;
element.children;
element.nextElementSibling;
element.previousElementSibling;
```

### Create/Add/Delete Html Element

```javascript
element.appendChild(tag);
element.insertBefore(new_tag,old_tag);
element.removeChild(tag);
```

### Add CSS Style to Html Element

```javascript
element.innerHTML="Text";
element.style.color="color name";
element.style.backgroundColor="color name"
element.style.textDecoration="";
element.style.fontSize="";
```
<b>File :</b> <mark>DOM,BOM,Webstorage API->DOM_selector.js</mark></br>

### Events

```javascript
get.addEventListener("event",()=>{
    //code here

})
```
<b>File :</b> <mark>DOM,BOM,Webstorage API->DOM_event_listner.js</mark></br>


## Browser Object Model

<ul>
<li>Location object
<li>Popup Box
<li>Time
<li>Cookies
</ul>

<b>File :</b> <mark>DOM,BOM,Webstorage API->BOM.js</mark></br>

## JavaScript Object Notation

```javascript
{
    "key":value
    "Key":value
    .........
    ......
    ...
}
```

### Access/Add/Update Delete

```javascript
let data=require("./basic.json");

//access
data.name;
data.skills[0];
data.address.city;

data.skills[0]="Javascript";    // update or add

delete data.salary;            //delete
```

### Built-in Function
```javascript
JSON.stringify(); 
JSON.parse();  
```




<b>File :</b> <mark>json->json_basic.js</mark></br>

## WebStorage
<ul>
<li>LocalStorage
<li>SessionStorage
<li>Cookies
</ul>

### LocalStorage/SessionStorage

```javascript
localStorage/sessionStorage.setItem("key","value");      //add or update
localStorage/sessionStorage.getItem("key");
localStorage/sessionStorage.removeItem("key");
```

### Cookies

```javascript
document.cookie="";
document.cookie;
```
<b>File :</b> <mark>DOM,BOM,Webstorage API->webstorage.js</mark></br>

## Connection Between Frontend and Server
<ul>
<li>Xml_Http_Request
<li>Fetch
<li>Axios
</ul>

### xml_http_request
```javascript
 const xhr = new XMLHttpRequest();
 xhr.open("method_name","url",true);
 xhr.setRequestHeader("Content-Type", "application/json");  //for post or put method
 xhr.onload=()=>{

    //code here

 }

 xhr.onerror=()=>{

    //code here

 }

 const body = JSON.stringify({

    //code here

});

 xhr.send();    // for get or delete method
 xhr.send(body);    // post or put method
```
<b>File :</b> <mark>API->xml_http_request.js</mark></br>

### Fetch without Async

```javascript
fetch("url", {
  method: "method_name",
  headers: {
    "Content-Type": "application/json"     //post method or put method
  },
  body: JSON.stringify({
    //code here
  })
})
.then(res => {
    if (!res.ok){

        //code here
      
    }
    return res.json();              
  })
  .then(data => {

    //code here
    
  })
  .catch(err => {

    //code here
    
  });
```


### Fetch with Async

```javascript
async function updatePost() {
try {
    const res = await fetch("url", {
      method: "method_name",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        //code here
      })
    });

    if (!res.ok) {
      //code here
    }

    const data = await res.json();
    
  } catch (err) {
    //code here
  }
}

```
<b>File :</b> <mark>API->fetch.js</mark></br>

### Axios without async

#### Setup
```javascript
npm install axios
```

Past html header tag
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

```javascript
axios.get/post/put/delete("url", {
      title: "My Post",
      body: "Some content",
      userId: 1
    })
.then(res => {
  //code here
})
.catch(err => {
  //code here
});
```
### Axios with async

```javascript
async function createPost() {
  try {
    const res = await axios.get/post/put/delete("url", {
      //Body here
    });
    
  } catch (err) {
    //code here
  }
}
```
<b>File :</b> <mark>API->axios.js</mark></br>




