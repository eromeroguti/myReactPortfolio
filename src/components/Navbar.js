import React from 'react';

export const Navbar = () => {

  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];
  
  
  return (
    <div>
      {/* eslint-disable-next-line */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#B7B6B6' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Edgar Romero</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;