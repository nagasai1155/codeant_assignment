import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RepositoryList from "./components/RepositoryList";
import "./App.css";

const App = () => (
  <div className="app">
    <Sidebar />
    <main>
      <Navbar />
      <RepositoryList />
    </main>
  </div>
);

export default App;
