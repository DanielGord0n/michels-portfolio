import React, { useState } from 'react';
import { FaDownload, FaEye, FaExpand, FaFileAlt, FaUser, FaBriefcase, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resumeData = {
    personalInfo: {
      name: "Michel Vivier",
      email: "Mvivier111@gmail.com",
      phone: "+1 (647)-535-2589",
      linkedin: "www.linkedin.com/in/michel-vivier"
    },
    education: {
      school: "Schulich School of Business (BBA), York University",
      graduation: "Expected Graduation: 2026"
    },
    experience: [
      {
        title: "Assistant Marketing Manager",
        company: "Novaly Studios",
        period: "2023 - 2024",
        highlights: [
          "Created queries using SQL for data extraction and analysis",
          "Identified and analyzed user information for game players on Roblox",
          "Supported strategic initiatives for the marketing team",
          "Drove TikTok strategy at Novaly Studios, growing followers by 17,000"
        ]
      },
      {
        title: "Virtual Campus Account Manager Intern",
        company: "Canadian Marketing League",
        period: "2024 (4 month internship position)",
        highlights: [
          "Represented Schulich School of Business and managed national marketing campaigns",
          "Built relationships across Canada with professors/students and collaborated with fellow interns",
          "Attended workshops and meetings to enhance teamwork and strategic skills"
        ]
      },
      {
        title: "Market Research & Outreach Intern",
        company: "The Kind Pet",
        period: "2025 (3-month internship position)",
        highlights: [
          "Researched and identified 40+ independent U.S. pet boutiques aligned with sustainable brand values",
          "Compiled comprehensive store profiles including contact details and social insights for outreach",
          "Assessed brand compatibility and potential for strategic retail partnerships",
          "Produced final business development report with actionable recommendations for future growth"
        ]
      },
      {
        title: "Marketing Manager & Coach",
        company: "Gymnastics at Viva RGC",
        period: "2020 - 2025",
        highlights: [
          "Organized five major athletic competitions, including the 2018 Ontario Gymnastics Championship",
          "Managed social media platforms and email marketing campaigns to engage the community",
          "Provided customer support and mentorship throughout the training process",
          "Licensed Gym Mental Health Performance Coach and certified Level 1 Gymnastics & Rhythmic Gymnastics Coach since 2020"
        ]
      }
    ],
    achievements: [
      "PepsiCo 7 Case Semi-Finalist – Canadian Marketing League",
      "HubSpot Academy Certified – Content Marketing, Digital Marketing, Social Media Marketing",
      "Academic Honour Roll – 4 years",
      "Student Council Member"
    ],
    gymnasticsAchievements: [
      "Member of Team Canada from 2017 to 2022",
      "Longlisted for Tokyo 2020 Olympic Games",
      "12th place – 2019 Junior World Championships, Moscow (out of 62 athletes)"
    ],
    skills: {
      technical: ["Excel", "Word", "Basic SQL", "Slack", "Adobe Flash", "Script", "Microsoft Office", "PowerPoint", "Outlook", "Basic Python"],
      core: ["Time management", "Discipline", "Problem-solving", "Creativity", "Teamwork", "Collaboration"],
      marketing: ["Content creation", "Digital marketing", "Campaign management"],
      communication: ["Public Speaking", "Communication"]
    }
  };

  const handleDownload = () => {
    // For now, we'll create a link to download. In a real implementation, 
    // you would have the actual PDF file in the public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add the actual PDF to public folder
    link.download = 'Michel_Vivier_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    setIsModalOpen(true);
  };

  const handleOpenNewTab = () => {
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="resume" className="section resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        
        <div className="resume-content">
          <div className="resume-preview-card card">
            <div className="resume-header">
              <div className="resume-icon">
                <FaFileAlt />
              </div>
              <div className="resume-info">
                <h3>Michel Vivier - Resume</h3>
                <p>Marketing Strategist & Data Analytics Professional</p>
                <span className="file-size">PDF • Updated June 2025</span>
              </div>
            </div>
            
            <div className="resume-actions">
              <button className="btn btn-primary" onClick={handlePreview}>
                <FaEye /> Preview Resume
              </button>
              <button className="btn btn-outline" onClick={handleDownload}>
                <FaDownload /> Download PDF
              </button>
            </div>
          </div>

          <div className="resume-highlights">
            <div className="highlight-cards grid grid-3">
              <div className="highlight-card card">
                <div className="highlight-icon">
                  <FaUser />
                </div>
                <h4>Profile</h4>
                <p>Marketing and data analytics professional with Olympic-level athletic background</p>
              </div>
              
              <div className="highlight-card card">
                <div className="highlight-icon">
                  <FaBriefcase />
                </div>
                <h4>Experience</h4>
                <p>Proven track record in digital marketing, SQL analysis, and community growth</p>
              </div>
              
              <div className="highlight-card card">
                <div className="highlight-icon">
                  <FaGraduationCap />
                </div>
                <h4>Education</h4>
                <p>BBA from Schulich School of Business with Academic Honour Roll recognition</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Preview Modal */}
        {isModalOpen && (
          <div className="resume-modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Resume Preview</h3>
                <div className="modal-actions">
                  <button className="btn btn-outline" onClick={handleDownload}>
                    <FaDownload /> Download
                  </button>
                  <button className="btn btn-secondary" onClick={handleOpenNewTab}>
                    <FaExternalLinkAlt /> Open in New Tab
                  </button>
                  <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                    ×
                  </button>
                </div>
              </div>
              
              <div className="modal-content">
                <div className="resume-pdf-container">
                  <iframe 
                    src="/resume.pdf" 
                    title="Michel Vivier Resume"
                    className="resume-pdf"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
