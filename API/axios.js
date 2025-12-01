//get method=========================================================
axios.get("https://jsonplaceholder.typicode.com/users/1")
  .then(res => {
    console.log("GET:", res.data);
})
  .catch(err => {
    console.log("Error:", err.message);
});

//without async
async function getUser() {
try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    console.log("GET:", res.data);
} catch (err) {
    console.log("Error:", err.message);
}
}
getUser();


//post method===============================================================
axios.post("https://jsonplaceholder.typicode.com/posts", {
  title: "My Post",
  body: "Some content",
  userId: 1
})
.then(res => {
  console.log("POST:", res.data);
})
.catch(err => {
  console.log("Error:", err.message);
});


//with async
async function createPost() {
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "My Post",
      body: "Some content",
      userId: 1
    });
    console.log("POST:", res.data);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

createPost();


//put method=================================================================
axios.put("https://jsonplaceholder.typicode.com/posts/1", {
  title: "Updated title",
  body: "Updated content",
  userId: 1
})
.then(res => console.log("PUT:", res.data))
.catch(err => console.log("Error:", err.message));


//with async
async function updatePost() {
  try {
    const res = await axios.put("https://jsonplaceholder.typicode.com/posts/1", {
      title: "Updated title",
      body: "Updated content",
      userId: 1
    });
    console.log("PUT:", res.data);
  } catch (err) {
    console.log("Error:", err.message);
  }
}
updatePost();



//delete method==============================================================
axios.delete("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => console.log("DELETE:", res.data))
  .catch(err => console.log("Error:", err.message));


//with async
async function deletePost() {
  try {
    const res = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
    console.log("DELETE:", res.data);
  } catch (err) {
    console.log("Error:", err.message);
  }
}
deletePost();

