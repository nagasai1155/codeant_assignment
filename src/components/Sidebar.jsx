import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

// Import images for logos
import repoLogo from "../assets/317712_code repository_github_repository_resource_icon.png"; 
import aiLogo from "../assets/4373067_adobe_ai_illustrator_logo_logos_icon.png"; 
import cloudLogo from "../assets/2849803_cloudy_cloud_weather_multimedia_icon.png"; 
import useLogo from "../assets/7606778_work from home_online_new normal_working_man_icon.png"; 
import settingsLogo from "../assets/2849830_multimedia_options_setting_settings_gear_icon.png"; 
import supportLogo from "../assets/172475_headset_support_icon.png"; 
import logoutLogo from "../assets/4115235_exit_logout_sign out_icon.png"; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track sidebar toggle

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <>
      {/* Toggle button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="sidebar-menu">
          <li>
            <Link to="/">
              <img src={repoLogo} alt="Repositories" className="sidebar-logo" /> Repositories
            </Link>
          </li>
          <li>
            <Link to="/ai-code-review">
              <img src={aiLogo} alt="AI Code Review" className="sidebar-logo" /> AI Code Review
            </Link>
          </li>
          <li>
            <Link to="/cloud-security">
              <img src={cloudLogo} alt="Cloud Security" className="sidebar-logo" /> Cloud Security
            </Link>
          </li>
          <li>
            <Link to="/how-to-use">
              <img src={useLogo} alt="How to Use" className="sidebar-logo" /> How to Use
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <img src={settingsLogo} alt="Settings" className="sidebar-logo" /> Settings
            </Link>
          </li>
        </ul>
        <div className="sidebar-bottom">
          <Link to="/support" className="sidebar-link">
            <img src={supportLogo} alt="Support" className="sidebar-logo" /> Support
          </Link>
          <Link to="/logout" className="sidebar-link">
            <img src={logoutLogo} alt="Logout" className="sidebar-logo" /> Logout
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
