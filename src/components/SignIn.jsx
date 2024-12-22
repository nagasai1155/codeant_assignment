import React from "react";
import "../styles/SignIn.css";

const SignIn = () => (
  <div className="signin-container">
    <h1>Welcome to CodeAnt AI</h1>
    <div className="auth-tabs">
      <button className="active-tab">SAAS</button>
      <button>Self Hosted</button>
    </div>
    <div className="auth-options">
      <button>Sign in with Github</button>
      <button>Sign in with Bitbucket</button>
      <button>Sign in with Azure DevOps</button>
      <button>Sign in with GitLab</button>
    </div>
    <p>By signing up, you agree to the <a href="#">Privacy Policy</a>.</p>
  </div>
);

export default SignIn;
