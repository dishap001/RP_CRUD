import axios from 'axios';
import React from 'react';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';



function Home() {

 const [data, setData] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of Users</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
          <Link to="/create" className='btn btn-success'>Add +</Link></div>
        
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
            {data.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                    <Link to={`/read/${user.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
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
