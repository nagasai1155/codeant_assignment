import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"; // Corrected Path
import Sidebar from "./components/Sidebar.jsx"; // Corrected Path
import RepositoryList from "./components/RepositoryList.jsx"; // Corrected Path
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";

import "./App.css"; // Corrected Path

const App = () => (
  <Router>
    <div className="app">
      <Sidebar />
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
