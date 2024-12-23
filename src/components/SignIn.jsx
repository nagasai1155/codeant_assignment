import React from "react";
import "../styles/SignIn.css";

const SignIn = () => (
  <div className="signin-container">
    <h1>Welcome to CodeAnt AI</h1>
    <div className="auth-tabs">
      <button className="active-tab">SAAS</button>
      <button>Self Hosted</button>
    </div>

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

    <div className="auth-options">
      <button>Sign in with Github</button>
      <button>Sign in with Bitbucket</button>
      <button>Sign in with Azure DevOps</button>
      <button>Sign in with GitLab</button>
    </div>
    <p>
      By signing up, you agree to the <a href="#">Privacy Policy</a>.
    </p>
  </div>
);

export default SignIn;
