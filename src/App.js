import React from 'react';
import './App.css';
import truckImage from './assets/truck-on-highway.jpg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <h1>TC Booking App</h1>
        </div>
        <nav className="nav">
          <div className="nav-dropdown">
            <button className="dropbtn">Overview</button>
            <div className="dropdown-content">
              <p className="description-text">TC is a B2B transport aggregator providing seamless logistics solutions for businesses across India.</p>
            </div>
          </div>
          <div className="nav-dropdown">
            <button className="dropbtn">Solutions</button>
            <div className="dropdown-content">
              <button>SMEs</button>
              <button>Enterprise</button>
              <button>Manufacturing Unit</button>
              <button>Traders</button>
            </div>
          </div>
          <div className="nav-dropdown">
            <button className="dropbtn">Pricing</button>
            <div className="dropdown-content">
              <button>Flexible Plans</button>
              <button>Enterprise Plans</button>
            </div>
          </div>
          <div className="nav-dropdown">
            <button className="dropbtn">Customer support</button>
            <div className="dropdown-content">
              <button>FAQ</button>
              <button>Contact Support</button>
            </div>
          </div>
        </nav>
        <div className="auth-and-lang-buttons">
          <div className="lang-dropdown">
            <button className="dropbtn"><FaGlobe /> EN</button>
            <div className="dropdown-content">
              <button>हिंदी</button>
              <button>తెలుగు</button>
              <button>தமிழ்</button>
              <button>മലയാളം</button>
              <button>ಕನ್ನಡ</button>
            </div>
          </div>
          <button className="auth-btn">Log In</button>
          <button className="auth-btn get-started">Get Started</button>
        </div>
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
        <section className="global-platform-section">
          <div className="platform-content">
            <p>A B2B platform built on India's largest transport network</p>
          </div>
        </section>
        <section className="solutions-section">
          <h2>Solutions that meet your business needs</h2>
          <div className="solutions-grid">
            <div className="solution-card">
              <h3>Business trips and travel</h3>
              <p>Give your employees the freedom to travel for work while you stay in control with set spend limits.</p>
            </div>
            <div className="solution-card">
              <h3>Meal programs</h3>
              <p>Offer your employees the flexibility to order meals while working from home or in the office.</p>
            </div>
            <div className="solution-card">
              <h3>Employee benefits</h3>
              <p>Attract and retain talent with transport solutions that benefit your employees.</p>
            </div>
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
        <section className="why-tc-section">
          <h2>Why businesses choose TC</h2>
          <div className="benefits-container">
            <div className="benefit-card">
              <div className="benefit-content">
                <h3>Simplified transport booking</h3>
                <p>Manage all your business travel on one platform.</p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-content">
                <h3>Full control of your expenses</h3>
                <p>Set spending limits and keep track of all transport costs in real-time.</p>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-content">
                <h3>Dedicated customer support</h3>
                <p>Get 24/7 support from a team of experts ready to help you.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to get started?</h2>
            <p>Sign up in minutes and start managing your business transport today.</p>
            <button className="primary-btn">Sign up now</button>
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