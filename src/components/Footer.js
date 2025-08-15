import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>Michel Vivier</h3>
              <p>Marketing Strategist & Data Analytics Professional</p>
              <p className="footer-tagline">
                Turning insights into action, ideas into scalable campaigns.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); }}>Home</a></li>
                  <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); }}>About</a></li>
                  <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' }); }}>Portfolio</a></li>
                  <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Services</h4>
                <ul>
                  <li>Marketing Strategy</li>
                  <li>Data Analytics</li>
                  <li>Social Media Management</li>
                  <li>Market Research</li>
                  <li>Campaign Development</li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Connect</h4>
                <div className="footer-contact">
                  <a href="mailto:Mvivier111@gmail.com" className="footer-contact-item">
                    <FaEnvelope />
                    <span>Mvivier111@gmail.com</span>
                  </a>
                  <a href="tel:647-535-2589" className="footer-contact-item">
                    <FaPhone />
                    <span>647-535-2589</span>
                  </a>
                  <a href="https://www.linkedin.com/in/michel-vivier-92b963251/" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                    <FaLinkedin />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-cta">
            <div className="cta-content">
              <h4>Ready to Work Together?</h4>
              <p>I'm excited to keep growing, creating, and connecting with opportunities that make an impact.</p>
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              © {currentYear} Michel Vivier
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/michel-vivier-92b963251/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:Mvivier111@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="tel:647-535-2589" aria-label="Phone">
                <FaPhone />
              </a>
            </div>
            <button onClick={scrollToTop} className="back-to-top">
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
