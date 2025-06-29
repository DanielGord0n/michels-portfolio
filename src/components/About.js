import React from 'react';
import { FaChartLine, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content grid grid-2">
          <div className="about-text fade-in">
            <h3 className="about-heading">Passionate Marketing Professional</h3>
            <p className="about-description">
              I'm a marketing and data analytics professional with a passion for turning 
              insights into action. Over the years, I've helped brands grow by combining 
              creative strategy with data-driven thinking — whether it's building social 
              media communities, leading market research, or crafting campaigns that 
              truly connect.
            </p>
            <p className="about-description">
              I love finding the story in the numbers and using it to build meaningful, 
              lasting brand experiences. My background spans from Olympic-level athletics 
              to cutting-edge digital marketing, giving me a unique perspective on 
              performance, dedication, and strategic thinking.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">17K+</span>
                <span className="stat-label">TikTok Followers Grown</span>
              </div>
              <div className="stat">
                <span className="stat-number">40+</span>
                <span className="stat-label">Market Research Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
          
          <div className="about-skills slide-in-right">
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon">
                  <FaChartLine />
                </div>
                <h4>Data Analytics</h4>
                <p>SQL, Excel, Performance Analytics, Consumer Behavior Analysis</p>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon">
                  <FaLightbulb />
                </div>
                <h4>Creative Strategy</h4>
                <p>Campaign Development, Brand Positioning, Content Creation</p>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon">
                  <FaUsers />
                </div>
                <h4>Community Building</h4>
                <p>Social Media Management, Influencer Marketing, Engagement</p>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon">
                  <FaRocket />
                </div>
                <h4>Growth Marketing</h4>
                <p>Scalable Campaigns, Market Research, Strategic Planning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
