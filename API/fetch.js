//get method================================================
// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then(res => {
//     if (!res.ok) {
//     throw new Error("HTTP error: " + res.status);
// }
//     return res.json(); // parse JSON and return Promise
// })
// .then(data => {
//     console.log("GET data:", data); // here you get parsed JSON
// })
// .catch(err => {
//     console.log("GET error:", err.message);
// });


//with async
// async function getUser() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     if (!res.ok) {
//       throw new Error("HTTP error: " + res.status);
//     }
//     const data = await res.json();
//     console.log("GET data:", data);
//   } catch (err) {
//     console.log("GET error:", err.message);
//   }
// }
//getUser();



//post method================================================
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "My post",
//     body: "This is the content",
//     userId: 2
//   })
// })
// .then(res => {
//     if (!res.ok) {
//       throw new Error("HTTP error: " + res.status);
// }
//     return res.json();              // parse JSON (returns another Promise)
// })
// .then(data => {
//     console.log("POST response (then):", data);
// })
// .catch(err => {
//     console.log("POST error (then):", err.message);
//  });



//with async
//  async function createPost() {
// try {

//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         title: "My post",
//         body: "This is the content",
//         userId: 2
//       })
// });

// if (!res.ok){
//     throw new Error("HTTP error: " + res.status);
// }
//     const data = await res.json();   // wait for JSON parsing
//     console.log("POST response (async):", data);
// } catch (err) {
//     console.log("POST error (async):", err.message);
//   }
// }
// createPost();




//put method==================================================

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     id: 1,                          // usually include id
//     title: "Updated title",
//     body: "Updated content",
//     userId: 2
//   })
// })
// .then(res => {
//     if (!res.ok) {
//       throw new Error("HTTP error: " + res.status);
//     }
//     return res.json();              // parse JSON
//   })
//   .then(data => {
//     console.log("PUT response (then):", data);
//   })
//   .catch(err => {
//     console.log("PUT error (then):", err.message);
//   });


//with async
// async function updatePost() {
// try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         id: 1,
//         title: "Updated title",
//         body: "Updated content",
//         userId: 2
//       })
//     });

//     if (!res.ok) {
//       throw new Error("HTTP error: " + res.status);
//     }

//     const data = await res.json();
//     console.log("PUT response (async):", data);
//   } catch (err) {
//     console.log("PUT error (async):", err.message);
//   }
// }

// updatePost();



//delete method===============================================
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE"
// })
//   .then(res => {
//     if (!res.ok) {
//       throw new Error("HTTP error: " + res.status);
//     }

//     // Some APIs return no content (204), some return JSON.
//     return res.text(); // use text() first to be safe
//   })
//   .then(body => {
//     console.log("DELETE response (then):", body); // often empty string
//   })
//   .catch(err => {
//     console.log("DELETE error (then):", err.message);
//   });

//with async
async function deletePost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE"
    });

    if (!res.ok) {
      throw new Error("HTTP error: " + res.status);
    }

    const text = await res.text(); // or res.json() if API returns JSON
    console.log("DELETE response (async):", text);
  } catch (err) {
    console.log("DELETE error (async):", err.message);
  }
}

deletePost();






