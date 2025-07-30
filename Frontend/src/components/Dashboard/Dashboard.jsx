import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))  // <-- Fix: was setCoaches
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
