import React, { useState,useEffect  } from 'react';
import { Link ,useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';





function Update() {
  // const [data, setData] = useState([]);
  const {id} = useParams(); 
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
  })

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const navigate= useNavigate();
  const handleUpdate =(event) =>{
    event.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`,values)
      .then((res) => {
        console.log(res);
        navigate('/');
      } )
      .catch((err) => console.log(err));
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h2>Update a User</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            name="name" // Add name attribute
            value={values.name}
            onChange={(e)=> setValues({...values , name: e.target.value})}

          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            name="email"
            value={values.email}
            onChange={e=> setValues({...values,email: (e).target.value})}

          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter Phone Number"
            name="phone" 
            value={values.phone}
            onChange={(e)=> setValues({...values,phone: e.target.value})}

          />
        </div>
        <button type="submit" className="btn btn-success">Update</button>
        <Link to="/" className="btn btn-primary ms-3">Back</Link>
      </form>
    </div>
  </div>
  );
}

export default Update;