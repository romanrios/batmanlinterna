console.log("JS RUNNINgG");

let getNameAxios = async (idPost) => {
  try {
    let resPost = await axios(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );

    let resUser = await axios(
      `https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`
    );
    console.log(resUser);
    document.write(
      `${resUser.data.name} vive en ${resUser.data.address.street}`
    );
  } catch (error) {
    console.log(error);
  }
};

getNameAxios(2);

// https://jsonplaceholder.typicode.com/posts/
// https://jsonplaceholder.typicode.com/users/
