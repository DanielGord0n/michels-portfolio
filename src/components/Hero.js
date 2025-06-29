import React from 'react';
import { FaArrowDown, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in">
            <h1 className="hero-title">
              <span className="title-line">MICHEL VIVIER'S</span>
              <span className="title-line-large">PORTFOLIO</span>
            </h1>
            
            <p className="hero-subtitle">
              MARKETING STRATEGIST, CREATIVE-LED,
              <br />
              ANALYTICS-FOCUSED, TURNING IDEAS INTO SCALABLE CAMPAIGNS.
            </p>
            
            <div className="hero-buttons">
              <a href="#portfolio" className="btn btn-primary" onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Get In Touch
              </a>
            </div>

            <div className="hero-social">
              <a href="https://www.linkedin.com/in/michel-vivier-92b963251/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="mailto:Mvivier111@gmail.com" className="social-link">
                <FaEnvelope />
              </a>
              <a href="tel:647-535-2589" className="social-link">
                <FaPhone />
              </a>
            </div>
          </div>
          
          <div className="hero-image slide-in-right">
            <div className="image-placeholder">
              <div className="profile-circle">
                <span>MV</span>
              </div>
            </div>
          </div>
        </div>
        
        <button className="scroll-indicator" onClick={scrollToAbout} aria-label="Scroll to about section">
          <FaArrowDown />
        </button>
      </div>
    </section>
  );
};

export default Hero;
