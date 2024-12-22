import React from "react";
import "../styles/RepositoryCard.css";

const RepositoryCard = ({ name, size, language, updated, visibility }) => (
  <div className="repo-card">
    <h3 className="repo-name">{name}</h3>
    <div className="repo-details">
      <span>{language}</span>
      <span>{size} KB</span>
      <span>{visibility}</span>
      <span>Updated {updated}</span>
    </div>
  </div>
);

export default RepositoryCard;
