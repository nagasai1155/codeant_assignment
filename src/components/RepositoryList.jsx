import React from "react";
import RepositoryCard from "./RepositoryCard";
import "../styles/RepositoryList.css";

const repositories = [
  { name: "design-system", size: 7320, language: "React", updated: "1 day ago", visibility: "Public" },
  { name: "codeant-ci-app", size: 5871, language: "JavaScript", updated: "2 days ago", visibility: "Private" },
  { name: "analytics-dashboard", size: 4521, language: "Python", updated: "5 days ago", visibility: "Private" },
  { name: "mobile-app", size: 3096, language: "Swift", updated: "3 days ago", visibility: "Public" },
  { name: "e-commerce-platform", size: 5230, language: "Java", updated: "4 days ago", visibility: "Private" },
];

const RepositoryList = () => (
  <div className="repo-list">
    {repositories.map((repo, index) => (
      <RepositoryCard key={index} {...repo} />
    ))}
  </div>
);

export default RepositoryList;
