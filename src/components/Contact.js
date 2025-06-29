import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-intro">
          <p>If you're exploring this portfolio for a potential hire, I'd be excited to bring my creative, strategic, and executional skills to your team. With hands-on experience in digital marketing, market research, and community-driven content strategy, I'm confident in my ability to contribute to brand growth and campaign success.</p>
          <p><strong>I'm open to full-time, internship, or contract opportunities — let's connect and explore how I can add value to your team.</strong></p>
        </div>
        
        <div className="contact-content grid grid-2">
          <div className="contact-info fade-in">
            <h3 className="contact-heading">Let's Start a Conversation</h3>
            <p className="contact-description">
              Captured your interest? I'm just a message away — get in touch and I'll get back to you as soon as possible.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:Mvivier111@gmail.com">Mvivier111@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <a href="tel:647-535-2589">647-535-2589</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaLinkedin />
                </div>
                <div className="contact-text">
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/michel-vivier-92b963251/" target="_blank" rel="noopener noreferrer">
                    Michel Vivier
                  </a>
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

            <div className="availability-status">
              <div className="status-indicator available"></div>
              <span>Available for new opportunities</span>
            </div>
          </div>
          
          <div className="contact-form-container slide-in-right">
            <form className="contact-form card" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              
              <div className="form-group">
                <div className="input-with-icon">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-with-icon">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-with-icon">
                  <FaPaperPlane className="input-icon" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-with-icon">
                  <FaComment className="input-icon textarea-icon" />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
