import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const handleEmailDraft = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Mvivier111@gmail.com`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-intro">
          <p>If you're exploring this portfolio for a potential hire, I'd be excited to bring my creative, strategic, and executional skills to your team. With hands-on experience in digital marketing, market research, and community-driven content strategy, I'm confident in my ability to contribute to brand growth and campaign success.</p>
          <p><strong>I'm open to full-time, internship, or contract opportunities — let's connect and explore how I can add value to your team.</strong></p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info fade-in">
            <h3 className="contact-heading">Let's Start a Conversation</h3>
            <p className="contact-description">
              Captured your interest? I'm just a message away — get in touch and I'll get back to you as soon as possible.
            </p>
            
            <div className="contact-details horizontal">
              <div className="contact-item" onClick={() => window.location.href = 'mailto:Mvivier111@gmail.com'}>
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>Mvivier111@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item" onClick={() => window.location.href = 'tel:647-535-2589'}>
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>647-535-2589</p>
                </div>
              </div>
              
              <div className="contact-item" onClick={() => window.open('https://www.linkedin.com/in/michel-vivier-92b963251/', '_blank')}>
                <div className="contact-icon">
                  <FaLinkedin />
                </div>
                <div className="contact-text">
                  <h4>LinkedIn</h4>
                  <p>Michel Vivier</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Toronto, Ontario, Canada</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="contact-form card">
              <h3>Send a Message</h3>
              
              <button 
                type="button" 
                className="btn btn-primary submit-btn"
                onClick={handleEmailDraft}
              >
                Send Message
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
