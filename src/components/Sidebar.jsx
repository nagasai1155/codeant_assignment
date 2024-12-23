import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

// Import images for logos (ensure you have logo images in the correct folder)
import repoLogo from "../assets/317712_code repository_github_repository_resource_icon.png"; // Example logo for Repositories
import aiLogo from "../assets/4373067_adobe_ai_illustrator_logo_logos_icon.png"; // Example logo for AI Code Review
import cloudLogo from "../assets/2849803_cloudy_cloud_weather_multimedia_icon.png"; // Example logo for Cloud Security
import useLogo from "../assets/7606778_work from home_online_new normal_working_man_icon.png"; // Example logo for How to Use
import settingsLogo from "../assets/2849830_multimedia_options_setting_settings_gear_icon.png"; // Example logo for Settings
import supportLogo from "../assets/172475_headset_support_icon.png"; // Example logo for Support
import logoutLogo from "../assets/4115235_exit_logout_sign out_icon.png"; // Example logo for Logout

const Sidebar = () => (
  <aside className="sidebar">
    <ul className="sidebar-menu">
      <li><Link to="/"><img src={repoLogo} alt="Repositories" className="sidebar-logo" /> Repositories</Link></li>
      <li><Link to="/ai-code-review"><img src={aiLogo} alt="AI Code Review" className="sidebar-logo" /> AI Code Review</Link></li>
      <li><Link to="/cloud-security"><img src={cloudLogo} alt="Cloud Security" className="sidebar-logo" /> Cloud Security</Link></li>
      <li><Link to="/how-to-use"><img src={useLogo} alt="How to Use" className="sidebar-logo" /> How to Use</Link></li>
      <li><Link to="/settings"><img src={settingsLogo} alt="Settings" className="sidebar-logo" /> Settings</Link></li>
    </ul>
    <div className="sidebar-bottom">
      <Link to="/support" className="sidebar-link"><img src={supportLogo} alt="Support" className="sidebar-logo" /> Support</Link>
      <Link to="/logout" className="sidebar-link"><img src={logoutLogo} alt="Logout" className="sidebar-logo" /> Logout</Link>
    </div>
  </aside>
);

export default Sidebar;
