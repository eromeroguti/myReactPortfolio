import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];
  
  return (
    <div>
      {/* eslint-disable-next-line */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#B7B6B6' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Edgar Romero</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/Aboutme">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;