import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Flyer Design – Viva RGC Rhythmic Gymnastics Centre",
      category: "design",
      description: "As a co-owner of Viva RGC and a former long-listed Olympic rhythmic gymnast, I created this flyer to promote our programs and highlight the centre's commitment to excellence, community, and youth development.",
      fullDescription: "Designed to attract new families, the flyer blends professional branding with an inviting, energetic tone. Beyond design, my role gave me valuable experience in marketing, communication, and program coordination. I developed strong skills in speaking with both parents and young athletes — explaining training programs clearly, building trust, and fostering a positive environment.",
      skills: ["Graphic Design", "Marketing", "Brand Strategy", "Community Engagement"],
      image: "/api/placeholder/400/300",
      link: "#"
    },
    {
      id: 2,
      title: "Skincare Brand Customer Experience Strategy",
      category: "strategy",
      description: "This blog explores how skincare brands can improve customer experience by introducing personalized, low-risk sample kits that guide users from trial to full-size purchase.",
      fullDescription: "I proposed strategies like AI-driven customization, credit-based rewards, and feedback incentives to boost engagement and long-term loyalty. This project highlights my ability to combine consumer insight, CX strategy, and clear communication to solve real-world brand challenges.",
      skills: ["CX Strategy", "Consumer Research", "AI Implementation", "Strategic Writing"],
      image: "/api/placeholder/400/300",
      link: "#"
    },
    {
      id: 3,
      title: "Social Media Strategy & Analytics – Novaly Studios",
      category: "analytics",
      description: "At Novaly Studios, I led TikTok content strategy and community growth, helping the brand reach over 17,000 followers.",
      fullDescription: "Alongside content creation, I used SQL to analyze player behavior and engagement trends, supporting data-driven decisions across marketing campaigns. This role strengthened my skills in digital marketing, community management, performance analytics, and platform-specific growth, allowing me to merge creativity with data to deliver measurable impact.",
      skills: ["TikTok Marketing", "SQL", "Data Analysis", "Community Management"],
      image: "/api/placeholder/400/300",
      link: "#",
      results: "17,000+ followers grown"
    },
    {
      id: 4,
      title: "Social Media Strategy – Grays Toronto",
      category: "strategy",
      description: "I developed a multi-channel social media marketing strategy for Grays Toronto, a sustainable fashion and home decor brand.",
      fullDescription: "As part of the process, I conducted in-person stakeholder interviews, audience research, and competitor analysis. My final plan included influencer marketing, event-based promotions, and cross-platform content tailored for Instagram, TikTok, and Pinterest. This project strengthened my skills in campaign planning, brand positioning, performance analytics, and client communication.",
      skills: ["Social Media Strategy", "Market Research", "Influencer Marketing", "Brand Positioning"],
      image: "/api/placeholder/400/300",
      link: "#"
    },
    {
      id: 5,
      title: "VR Advertisement Concept",
      category: "creative",
      description: "Designed a VR advertisement as a CX concept to showcase immersive brand storytelling and enhance customer engagement through experiential marketing.",
      fullDescription: "This innovative approach explores how virtual reality can create deeper connections between brands and consumers, offering an immersive experience that goes beyond traditional advertising methods.",
      skills: ["VR Design", "Experiential Marketing", "Innovation", "Brand Storytelling"],
      image: "/api/placeholder/400/300",
      link: "#"
    },
    {
      id: 6,
      title: "Market Research Analysis – The Kind Pet",
      category: "analytics",
      description: "I conducted in-depth market research to identify over 40 independent U.S. pet boutiques that aligned with The Kind Pet's sustainable brand values.",
      fullDescription: "I compiled detailed store profiles including contact information, social insights, and product compatibility. My final business development report included strategic outreach recommendations to support retail partnerships and expansion. This role strengthened my skills in market analysis, B2B outreach, brand alignment, and strategic reporting.",
      skills: ["Market Research", "Data Analysis", "B2B Strategy", "Strategic Reporting"],
      image: "/api/placeholder/400/300",
      link: "#",
      results: "40+ boutiques identified"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'strategy', label: 'Strategy' },
    { key: 'analytics', label: 'Analytics' },
    { key: 'design', label: 'Design' },
    { key: 'creative', label: 'Creative' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        
        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-btn ${filter === category.key ? 'active' : ''}`}
              onClick={() => setFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid grid grid-3">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-item card fade-in">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <button className="action-btn" aria-label="View project details">
                      <FaEye />
                    </button>
                    <a href={project.link} className="action-btn" aria-label="External link">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {project.results && (
                  <div className="project-results">
                    <span className="results-badge">{project.results}</span>
                  </div>
                )}
                
                <div className="project-skills">
                  {project.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
                
                <div className="project-actions-bottom">
                  <button className="btn btn-outline">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
