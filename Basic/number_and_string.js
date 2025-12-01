//Number Built in Function==============================

let b=3.1456;
console.log(b.toFixed(2));          //return digit after .
console.log(b.toPrecision(2));      //return total digit


//String Built in Function==============================

let str="Hello world";
console.log(str.length);                //return the length of string

console.log(str[100]);                  //return undefined if not found
console.log(str.charAt(1));            //return the character at that point...return empty if not found
console.log(str.at(-1));               // supports negative index (from end)
console.log(str.codePointAt(2));       //return the ascii code at that point

console.log(str.startsWith(str));
console.log(str.includes("world"));
console.log(str.endsWith(str));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.slice(6));             //get substring from index 6
console.log(str.slice(-5));            //get substring from index -5
console.log(str.slice(0,4));           //get substring from index 0 to 4
console.log(str.slice(-5,-1));         //get substring from index -5 to -1

str="    Hello world       ";
console.log(str.trim());          // both ends
console.log(str.trimStart());     // beginning only
console.log(str.trimEnd())       // end only

str="Hello world world";
console.log(str.search("w"));
console.log(str.indexOf("world"));        // first position, or -1
console.log(str.lastIndexOf("world"));    // last position, or -1

str="Hello world world";
console.log(str.replace("world", "Hello"));
console.log(str.replaceAll("world", "Hello"));

str="ha";
console.log(str.repeat(3));              //repeat the string

console.log("7".padStart(3, "0"));       //make an 3 character string if not fill up with 0 at initialize
console.log("42".padStart(3, "0"));      //make an 3 character string if not fill up with 0 at initialize
console.log("Mahin".padEnd(8, "."));     //make an 8 character string if not fill up with 0 at last position

str="Mary Smith Jhon";
console.log(str.split(" "));            //make an array


//some string perform
str="It 'is' raining";
console.log(str);
str='It \'is\' raining';
console.log(str);
str="\tIt 'is' \nraining";
console.log(str);
str="It \\'is' raining";
console.log(str);

str="smith";
console.log(`My name is ${str}`);
str=`hi
how are you?`;
console.log(str);

