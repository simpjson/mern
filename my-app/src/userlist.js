import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [users, setUsers] = useState([]);

  const handleChange = (event) => {
    const page = event.target.value;
    setSelectedPage(page);

    // Fetch users based on the selected page
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(response => response.json())
      .then(data => {
        setUsers(data.data); // Assuming the user data is in data.data
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  useEffect(() => {
    // Fetch users for the initial selected page when the component mounts
    fetch(`https://reqres.in/api/users?page=${selectedPage}`)
      .then(response => response.json())
      .then(data => {
        setUsers(data.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, [selectedPage]);

  return (
    <div>
      <h1>User List Page</h1>
      <select value={selectedPage} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <h2>Users:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.first_name} {user.last_name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
