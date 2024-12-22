import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => (
  <aside className="sidebar">
    <ul>
      <li><Link to="/">Repositories</Link></li>
      <li><Link to="/signin">Sign In</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
      <li>AI Code Review</li>
      <li>Cloud Security</li>
      <li>How to Use</li>
      <li>Settings</li>
    </ul>
  </aside>
);

export default Sidebar;
