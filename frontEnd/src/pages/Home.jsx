import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">Welcome to School Management</h1>
        <p className="home-subtitle">
          Use the navigation above to add or view schools.
        </p>
      </div>
    </div>
  );
}

export default Home;
