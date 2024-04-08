// BUTTON
const fetchButton = document.getElementById("fetchButton");

fetchButton.addEventListener("click", async () => {
  const postNumberInput = document.getElementById("postNumberInput").value;
  await getNameAsync(postNumberInput);
});

// FETCH
const getNameAsync = async (postNumber) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postNumber}`
    );
    const data = await response.json();
    const userId = data.userId;

    const response2 = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data2 = await response2.json();

    const mySection = document.querySelector("#userDataContainer");

    const htmlContent = `
    <h2>Post ${data.id}</h2>
    <p><b> ${data.title}</b></>
    <p><i> ${data.body}</i></p>
<br/>
    <h2>User Details</h2>
    <p>User ID:<b> ${data2.id}</b></>
    <p>Name:<b> ${data2.name}</b></p>
    <p>Username:<b> ${data2.username}</b></p>
    <p>Email:<b> ${data2.email}</b></p>
    <p>Phone:<b> ${data2.phone}</b></p>
    <p>Website:<b> ${data2.website}</b></p>
    <p>City:<b> ${data2.address.city}</b></p>
  `;

    mySection.innerHTML = htmlContent;

    console.log(data2);
  } catch (error) {
    console.log(error);
  }
};

getNameAsync(20);
