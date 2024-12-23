import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => (
  <nav className="navbar">
    <h1>CodeAnt AI</h1>
    <li><Link to="/signin">Sign In</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
    <button className="add-repo-btn">+ Add Repository</button>
  </nav>
);

export default Navbar;
