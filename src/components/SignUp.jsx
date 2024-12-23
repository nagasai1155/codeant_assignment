import React from "react";
import "../styles/SignUp.css";

const SignUp = () => (
  <div className="signup-container">
    <h1>Create Your Account</h1>
    
    {/* Analytics Section */}
    <div className="analytics-section">
      <div className="analytics-card">
        <h2>AI to Detect & Autofix Bad Code</h2>
        <ul>
          <li>30+ Language Support</li>
          <li>10K+ Developers</li>
          <li>100K+ Hours Saved</li>
        </ul>
      </div>
      <div className="issues-fixed-card">
        <div className="issues-fixed">
          <p>Issues Fixed</p>
          <h3>500K+</h3>
        </div>
        <div className="this-week">
          <p>This Week</p>
          <h4>4%</h4>
        </div>
      </div>
    </div>

    <form>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>

    <p>Already have an account? <a href="/signin">Sign In</a></p>
  </div>
);

export default SignUp;