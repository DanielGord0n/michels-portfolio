import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaEye, FaTimes } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Flyer Design – Viva RGC Rhythmic Gymnastics Centre",
      category: "design",
      description: "As a co-owner of Viva RGC and a former long-listed Olympic rhythmic gymnast, I created this flyer to promote our programs and highlight the centre's commitment to excellence, community, and youth development.",
      fullDescription: "Designed to attract new families, the flyer blends professional branding with an inviting, energetic tone. Beyond design, my role gave me valuable experience in marketing, communication, and program coordination. I developed strong skills in speaking with both parents and young athletes — explaining training programs clearly, building trust, and fostering a positive environment.",
      skills: ["Graphic Design", "Marketing", "Brand Strategy", "Community Engagement"],
      icon: "/images/viva-rgc-icon.png", // Add icon for project
      image: "/images/viva-rgc-flyer.jpg",
      previewImage: "/images/viva-rgc-flyer.png", // Full size for preview
      link: "https://www.vivargc.com/#!/",
      hasLink: true
    },
    {
      id: 2,
      title: "Skincare Brand Customer Experience Strategy",
      category: "strategy",
      description: "This blog explores how skincare brands can improve customer experience by introducing personalized, low-risk sample kits that guide users from trial to full-size purchase.",
      fullDescription: "I proposed strategies like AI-driven customization, credit-based rewards, and feedback incentives to boost engagement and long-term loyalty. This project highlights my ability to combine consumer insight, CX strategy, and clear communication to solve real-world brand challenges.",
      skills: ["CX Strategy", "Consumer Research", "AI Implementation", "Strategic Writing"],
      icon: "/images/skincare-icon.png",
      image: "/images/skincare-strategy.jpg",
      previewImage: "/images/skincare-strategy-preview.jpg",
      link: "#", // Replace with actual blog link
      hasLink: false
    },
    {
      id: 3,
      title: "Social Media Strategy & Analytics – Novaly Studios",
      category: "analytics",
      description: "At Novaly Studios, I led TikTok content strategy and community growth, helping the brand reach over 17,000 followers.",
      fullDescription: "Alongside content creation, I used SQL to analyze player behavior and engagement trends, supporting data-driven decisions across marketing campaigns. This role strengthened my skills in digital marketing, community management, performance analytics, and platform-specific growth, allowing me to merge creativity with data to deliver measurable impact.",
      skills: ["TikTok Marketing", "SQL", "Data Analysis", "Community Management"],
      icon: "/images/novaly-icon.png",
      image: "/images/novaly-tiktok.jpg",
      previewImage: "/images/novaly-tiktok-preview.jpg",
      link: "https://novalystudios.com/",
      hasLink: true,
      results: "17,000+ followers grown"
    },
    {
      id: 4,
      title: "Social Media Strategy – Grays Toronto",
      category: "strategy",
      description: "I developed a multi-channel social media marketing strategy for Grays Toronto, a sustainable fashion and home decor brand.",
      fullDescription: "As part of the process, I conducted in-person stakeholder interviews, audience research, and competitor analysis. My final plan included influencer marketing, event-based promotions, and cross-platform content tailored for Instagram, TikTok, and Pinterest. This project strengthened my skills in campaign planning, brand positioning, performance analytics, and client communication.",
      skills: ["Social Media Strategy", "Market Research", "Influencer Marketing", "Brand Positioning"],
      icon: "/images/grays-icon.png",
      image: "/images/grays-strategy.jpg",
      previewImage: "/images/grays-strategy-preview.jpg",
      link: "https://graystoronto.com", // Replace with actual website
      hasLink: true
    },
    {
      id: 5,
      title: "VR Advertisement Concept",
      category: "creative",
      description: "Designed a VR advertisement as a CX concept to showcase immersive brand storytelling and enhance customer engagement through experiential marketing.",
      fullDescription: "This innovative approach explores how virtual reality can create deeper connections between brands and consumers, offering an immersive experience that goes beyond traditional advertising methods.",
      skills: ["VR Design", "Experiential Marketing", "Innovation", "Brand Storytelling"],
      icon: "/images/vr-icon.png",
      image: "/images/vr-concept.jpg",
      previewImage: "/images/vr-concept-preview.jpg",
      link: "#", // No external link for concept
      hasLink: false
    },
    {
      id: 6,
      title: "Market Research Analysis – The Kind Pet",
      category: "analytics",
      description: "I conducted in-depth market research to identify over 40 independent U.S. pet boutiques that aligned with The Kind Pet's sustainable brand values.",
      fullDescription: "I compiled detailed store profiles including contact information, social insights, and product compatibility. My final business development report included strategic outreach recommendations to support retail partnerships and expansion. This role strengthened my skills in market analysis, B2B outreach, brand alignment, and strategic reporting.",
      skills: ["Market Research", "Data Analysis", "B2B Strategy", "Strategic Reporting"],
      icon: "/images/kindpet-icon.png",
      image: "/images/kindpet-research.jpg",
      previewImage: "/images/kindpet-research-preview.jpg",
      link: "https://thekindpet.com", // Replace with actual website
      hasLink: true,
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

  const handlePreview = (project) => {
    setSelectedProject(project);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setSelectedProject(null);
  };

  const handleExternalLink = (url, hasLink) => {
    if (hasLink && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

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
            <div key={project.id} className="portfolio-item card fade-in" data-category={project.category}>
              <div className="project-image">
                <div className="project-icon-centered">
                  <img src={project.icon} alt={`${project.title} logo`} />
                </div>
                <div className="project-overlay">
                  <div className="project-actions">
                    <button 
                      className="action-btn" 
                      aria-label="View project preview"
                      onClick={() => handlePreview(project)}
                    >
                      <FaEye />
                    </button>
                    {project.hasLink && (
                      <button 
                        className="action-btn" 
                        aria-label="Visit website"
                        onClick={() => handleExternalLink(project.link, project.hasLink)}
                      >
                        <FaExternalLinkAlt />
                      </button>
                    )}
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
                  <button 
                    className="btn btn-outline"
                    onClick={() => handlePreview(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Preview Modal */}
        {isPreviewOpen && selectedProject && (
          <div className="preview-modal-overlay" onClick={closePreview}>
            <div className="preview-modal" onClick={(e) => e.stopPropagation()}>
              <div className="preview-header">
                <h3>{selectedProject.title}</h3>
                <div className="preview-actions">
                  {selectedProject.hasLink && (
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleExternalLink(selectedProject.link, selectedProject.hasLink)}
                    >
                      <FaExternalLinkAlt /> Visit Website
                    </button>
                  )}
                  <button className="close-btn" onClick={closePreview}>
                    <FaTimes />
                  </button>
                </div>
              </div>
              
              <div className="preview-content">
                <div className="preview-image-container">
                  <img 
                    src={selectedProject.previewImage || selectedProject.image} 
                    alt={selectedProject.title}
                    className="preview-image"
                  />
                </div>
                
                <div className="preview-details">
                  <div className="preview-description">
                    <h4>Project Overview</h4>
                    <p>{selectedProject.fullDescription}</p>
                  </div>
                  
                  {selectedProject.results && (
                    <div className="preview-results">
                      <h4>Results</h4>
                      <span className="results-badge-large">{selectedProject.results}</span>
                    </div>
                  )}
                  
                  <div className="preview-skills">
                    <h4>Skills & Technologies</h4>
                    <div className="skills-list">
                      {selectedProject.skills.map((skill, index) => (
                        <span key={index} className="skill-tag-large">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
