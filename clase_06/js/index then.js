console.log("JS RUNNING");

const getNameFetch = (idPost) => {
  try {
    fetch(`https://jsonplaceholder.typicode.com/users/${idPost}`)
      .then((res) => {
        return res.json();
      })
      .then((post) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.userId}`).then(
          (res) => {
            return res.json();
          }
        );
        console.log(post);
      });
  } catch (error) {
    console.log(error);
  }
};

getNameFetch(15);

// https://jsonplaceholder.typicode.com/posts/
// https://jsonplaceholder.typicode.com/users/
