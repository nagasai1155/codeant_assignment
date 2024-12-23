import React, { useEffect, useState } from "react";
import RepositoryCard from "./RepositoryCard";
import "../styles/RepositoryList.css";

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(null);

  // Fetch repositories from the provided URL
  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch("https://api.github.com/users/nagasai1155/repos");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRepositories(data); // Update state with fetched data
      } catch (err) {
        setError(err.message);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <div className="repo-list">
      {error ? (
        <p className="error">Error: {error}</p>
      ) : repositories.length > 0 ? (
        repositories.map((repo, index) => (
          <RepositoryCard key={index} {...repo} />
        ))
      ) : (
        <p>Loading repositories...</p>
      )}
    </div>
  );
};

export default RepositoryList;
