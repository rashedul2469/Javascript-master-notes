//Local storage
localStorage.setItem("username","smith");       //add item
console.log(localStorage.getItem("username"));  //get item
localStorage.setItem("username","jhon");        //update item
localStorage.removeItem("username");

let arr=[1,2,3,4,5];
localStorage.setItem("item",JSON.stringify(arr));   //to store object or array
console.log(JSON.parse(localStorage.getItem("item")));



//sessionStorage
sessionStorage.setItem("username","smith");       //add item
console.log(sessionStorage.getItem("username"));  //get item
sessionStorage.setItem("username","jhon");        //update item
sessionStorage.removeItem("username");

let arr1=[1,2,3,4,5];
sessionStorage.setItem("item",JSON.stringify(arr1));   //to store object or array
console.log(JSON.parse(sessionStorage.getItem("item")));


//cookies
document.cookie ="username=Mahin; expires=Wed, 01 Jan 2030 12:00:00 GMT";
console.log(document.cookie);


