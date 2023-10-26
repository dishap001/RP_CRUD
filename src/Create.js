import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Create() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values); // Log the form values
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h2>Add a User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name" // Add name attribute
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email" // Add name attribute
              value={values.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone" // Add name attribute
              value={values.phone}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">Back</Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
