import { useEffect, useState } from "react";

export const UsersApp = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      );
      const data = response.json();
      setUsers({ data });
      console.log(users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Users App</h1>
    </>
  );
};
