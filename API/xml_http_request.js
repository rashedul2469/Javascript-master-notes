//get request
// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1", true);

// xhr.onload = function () {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         console.log("GET Success (text):", xhr.responseText);
//         const data = JSON.parse(xhr.responseText);
//         console.log("GET Parsed:", data);
//     } else {
//         console.log("GET Error, status:", xhr.status);
//     }
// };

// xhr.onerror = function () {
//     console.log("GET Network Error");
// };

// xhr.send(); // no body for GET




//post request
// const xhr = new XMLHttpRequest();

// xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
// xhr.setRequestHeader("Content-Type", "application/json");

// xhr.onload = function () {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         console.log("POST Success:", xhr.responseText);
//     } else {
//         console.log("POST Error, status:", xhr.status);
//     }
// };

// xhr.onerror = function () {
//     console.log("POST Network Error");
// };

// const body = JSON.stringify({
//     title: "My post",
//     body: "This is the another content",
//     userId: 2
// });

// xhr.send(body);




//put request
// const xhr = new XMLHttpRequest();

// xhr.open("PUT", "https://jsonplaceholder.typicode.com/posts/1", true);
// xhr.setRequestHeader("Content-Type", "application/json");

// xhr.onload = function () {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         console.log("PUT Success:", xhr.responseText);
//     } else {
//         console.log("PUT Error, status:", xhr.status);
//     }
// };

// xhr.onerror = function () {
//     console.log("PUT Network Error");
// };

// const body = JSON.stringify({
//     id: 2,
//     title: "Updated title",
//     body: "Updated content",
//     userId: 2
// });

// xhr.send(body);





//delete request
const xhr = new XMLHttpRequest();

xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log("DELETE Success, status:", xhr.status);
        console.log("Response:", xhr.responseText); // some APIs return empty
    } else {
        console.log("DELETE Error, status:", xhr.status);
    }
};

xhr.onerror = function () {
    console.log("DELETE Network Error");
};

xhr.send(); // usually no body for DELETE

