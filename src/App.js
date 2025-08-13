import React from 'react';
import './App.css';
import truckImage from './assets/truck-on-highway.jpg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <h1>TC</h1>
        </div>
        <nav className="nav">
          <button className="nav-link">Log In</button>
          <button className="nav-link">Sign Up</button>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>The best of TC for your business</h1>
            <p>TC for Business gives your organization more control, deeper insights, and features built for enterprise users. Manage and track business transport on one dashboard.</p>
            <div className="cta-buttons">
              <button className="primary-btn">How to get started</button>
              <button className="secondary-btn">Check out our solutions</button>
            </div>
          </div>
          <div className="hero-image">
            {/* You will place your image here */}
            <img src={truckImage} alt="Transportation truck on a highway" />
          </div>
        </section>

        <section className="features-section">
          <h2>Designed for what your business needs</h2>
          <div className="features-grid">
            <div className="feature-card">
              <img src="path/to/icon1.svg" alt="Icon 1" />
              <h3>Feature Title 1</h3>
              <p>Description of a key feature for your business. Explain how it solves a problem or adds value.</p>
            </div>
            <div className="feature-card">
              <img src="path/to/icon2.svg" alt="Icon 2" />
              <h3>Feature Title 2</h3>
              <p>Description of another key feature, highlighting its benefits and purpose.</p>
            </div>
            <div className="feature-card">
              <img src="path/to/icon3.svg" alt="Icon 3" />
              <h3>Feature Title 3</h3>
              <p>Description of a third feature that makes your service unique and valuable to clients.</p>
            </div>
          </div>
        </section>

        {/* You can add more sections here */}
      </main>
      
      <footer className="footer">
        <p>© 2025 TC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;