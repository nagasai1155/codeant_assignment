import React from "react";
import "../styles/SignUp.css";

const SignUp = () => (
  <div className="signup-container">
    <h1>Create Your Account</h1>
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
