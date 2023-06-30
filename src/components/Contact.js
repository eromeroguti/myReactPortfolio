import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Email address" />
        </div>
        {/* Add more form fields here if needed */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;