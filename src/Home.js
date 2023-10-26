import React from 'react';
import usersData from './db1.json';
import { useState } from 'react';

function Home() {
  const [data] = useState(usersData.users);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of Users</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button className='btn btn-sm btn-primary me-2'>Edit</button>
                  <button className='btn btn-sm btn-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
