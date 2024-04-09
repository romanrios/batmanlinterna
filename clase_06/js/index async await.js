console.log("JS RUNNING");

const getNameAsync = async (idPost) => {
  try {
    const resPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );
    const post = resPost.json();
    console.log(post);

    const resUsers = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );
    const user = await resUsers.json();
    console.log(user);

    document.write(`${user.name} vive en ${user.address.street}`);
  } catch (error) {
    console.log(error);
  }
};

getNameAsync(15);

// https://jsonplaceholder.typicode.com/posts/
// https://jsonplaceholder.typicode.com/users/
