import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
        <div className="newsletter-inputs">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      
      <div className="footer-links">
        <div className="explore">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>

        <div className="support">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="stay-connected">
          <h4>Stay connected</h4>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>DEV@Deakin 2024</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Code of Conduct</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
