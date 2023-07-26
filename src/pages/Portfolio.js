import React from 'react';

 export const Portfolio = () => {
    return (
        <div className="container">
        <h1>Portfolio</h1>
        <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Edgar Romero</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">eromeroguti@gmail.com</label>
          <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Email address" />
        </div>
        {/* Add more form fields here if needed */}
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label">GitHub</label>
          <a href="https://github.com/eromeroguti" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput4" className="form-label">LinkedIn</label>
          <a href="https://www.linkedin.com/in/edgar-romero-9694ba187/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    );
};

export default Portfolio;