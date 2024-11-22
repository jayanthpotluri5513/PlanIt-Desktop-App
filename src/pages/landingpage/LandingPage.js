import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleLetGo = () => {
    navigate('/login');
  };

  return (
    <div className="landing-page">
      <header className="header">
        <h1>PlanIt</h1>
        <p>Your Ultimate Project Management Solution</p>
      </header>
      <main className="main-content">
        <div className="content-overlay">
          <h2>Streamline Your Projects</h2>
          <p>Efficiently manage tasks, collaborate with your team, and meet deadlines with ease.</p>
          <button onClick={handleLetGo} className="cta-button">Let's Go</button>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 PlanIt. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;

