import React from 'react';
import { FaAward, FaMedal, FaCertificate, FaTrophy } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "PepsiCo 7 Case Semi-Finalist",
      issuer: "Canadian Marketing League",
      year: "2024",
      type: "Competition",
      icon: <FaTrophy />,
      description: "Advanced to semi-finals in prestigious marketing case competition"
    },
    {
      title: "HubSpot Academy Certified",
      issuer: "HubSpot Academy",
      year: "2024",
      type: "Professional Certification",
      icon: <FaCertificate />,
      areas: ["Content Marketing", "Digital Marketing", "Social Media Marketing"],
      description: "Comprehensive digital marketing certification covering modern marketing strategies"
    },
    {
      title: "Academic Honour Roll",
      issuer: "Schulich School of Business",
      year: "2021-2024",
      duration: "4 years",
      type: "Academic Achievement",
      icon: <FaAward />,
      description: "Maintained high academic performance throughout business degree"
    }
  ];

  const achievements = [
    {
      title: "Team Canada Member",
      period: "2017 - 2022",
      icon: <FaMedal />,
      description: "Represented Canada in international rhythmic gymnastics competitions"
    },
    {
      title: "Tokyo 2020 Olympic Games Longlisted",
      period: "2020",
      icon: <FaTrophy />,
      description: "Achieved longlist status for Tokyo Olympics in rhythmic gymnastics"
    },
    {
      title: "12th place - 2019 Junior World Championships, Moscow",
      period: "2019",
      icon: <FaMedal />,
      description: "Competed among top 62 athletes at international championship level"
    },
    {
      title: "Student Council Member",
      period: "University",
      icon: <FaAward />,
      description: "Active leadership role in student governance and community building"
    }
  ];

  const skills = {
    technical: [
      "Excel", "Word", "Basic SQL", "Slack", "Adobe Flash", 
      "Script", "Microsoft Office", "PowerPoint", "Outlook", "Basic Python"
    ],
    core: [
      "Time Management", "Discipline", "Problem-solving", 
      "Creativity", "Teamwork", "Collaboration"
    ],
    marketing: [
      "Content Creation", "Digital Marketing", "Campaign Management"
    ],
    communication: [
      "Public Speaking", "Communication"
    ]
  };

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        
        <div className="certifications-content">
          {/* Professional Certifications */}
          <div className="certifications-section">
            <h3 className="subsection-title">Professional Certifications</h3>
            <div className="certifications-grid grid grid-3">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card card">
                  <div className="cert-icon">
                    {cert.icon}
                  </div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-year">{cert.year}</span>
                  {cert.duration && <span className="cert-duration">({cert.duration})</span>}
                  <p className="cert-description">{cert.description}</p>
                  {cert.areas && (
                    <div className="cert-areas">
                      {cert.areas.map((area, idx) => (
                        <span key={idx} className="area-tag">{area}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Athletic Achievements */}
          <div className="achievements-section">
            <h3 className="subsection-title">Athletic Achievements</h3>
            <div className="achievements-grid grid grid-2">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card card">
                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <span className="achievement-period">{achievement.period}</span>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Competencies */}
          <div className="skills-section">
            <h3 className="subsection-title">Skills & Competencies</h3>
            <div className="skills-categories grid grid-2">
              <div className="skills-category card">
                <h4>Technical Skills</h4>
                <div className="skills-list">
                  {skills.technical.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="skills-category card">
                <h4>Core Competencies</h4>
                <div className="skills-list">
                  {skills.core.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="skills-category card">
                <h4>Marketing & Social Media</h4>
                <div className="skills-list">
                  {skills.marketing.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="skills-category card">
                <h4>Public Speaking & Communication</h4>
                <div className="skills-list">
                  {skills.communication.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
