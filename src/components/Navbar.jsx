import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Navbar = () => (
  <nav className="navbar fixed-nav">
    <div className="nav-brand">ANKITKUMAR</div>
    <div className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/projects" className="nav-link">Projects</Link>
      <Link to="/skills" className="nav-link">Skills</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
