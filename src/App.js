import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1 className="logo">TC</h1>
        <div className="auth-buttons">
          <a href="#" className="auth-link">Login</a>
          <a href="#" className="auth-link">Sign Up</a>
        </div>
      </header>

      <main className="hero-section">
        <div className="hero-content">
          <h1>Effortless Truck Booking for Your Business</h1>
          <p>Connecting small businesses and manufacturing units with reliable transport services. Get a real-time quote in minutes.</p>
          <button className="cta-button">Get a Quote</button>
        </div>
      </main>

      <section className="benefits-section">
        <div className="benefit-card">
          <span className="benefit-icon">🔒</span>
          <h3>Secure & Reliable</h3>
          <p>Book with trusted carriers and ensure your goods are transported safely and on time.</p>
        </div>
        <div className="benefit-card">
          <span className="benefit-icon">💸</span>
          <h3>Transparent Pricing</h3>
          <p>Receive competitive quotes with a clear breakdown of all costs. No hidden fees.</p>
        </div>
        <div className="benefit-card">
          <span className="benefit-icon">🗺️</span>
          <h3>Real-Time Tracking</h3>
          <p>Track your shipment from pickup to delivery with our advanced logistics technology.</p>
        </div>
      </section>

      <section className="booking-section">
        <h2>Book a Truck</h2>
        <form className="booking-form">
          <div className="form-group">
            <label htmlFor="source">Source Location</label>
            <input type="text" id="source" placeholder="Enter source location" />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination Location</label>
            <input type="text" id="destination" placeholder="Enter destination location" />
          </div>
          <div className="form-group">
            <label htmlFor="materialType">Material Type</label>
            <input type="text" id="materialType" placeholder="e.g., Industrial Goods" />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight (in kg)</label>
            <input type="number" id="weight" placeholder="Enter weight" />
          </div>
          <div className="form-group">
            <label htmlFor="vehicleType">Vehicle Choice</label>
            <select id="vehicleType">
              <option value="">-- Select a vehicle --</option>
              <option value="pickup">Pickup Truck</option>
              <option value="mini-truck">Mini Truck</option>
              <option value="large-truck">Large Truck</option>
            </select>
          </div>
          <button type="submit" className="submit-button">Get Quotation</button>
        </form>
      </section>

      <footer className="main-footer">
        <p>&copy; 2025 Tarmac. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
