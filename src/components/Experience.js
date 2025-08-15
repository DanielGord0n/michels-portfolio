import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Assistant Marketing Manager",
      company: "Novaly Studios",
      period: "2023 - 2024",
      location: "Toronto, ON",
      type: "Full-time",
      achievements: [
        "Created queries using SQL for data extraction and analysis",
        "Identified and analyzed user information for game players on Roblox",
        "Supported strategic initiatives for the marketing team",
        "Drove TikTok strategy at Novaly Studios, growing followers by 17,000"
      ],
      skills: ["SQL", "Data Analysis", "TikTok Marketing", "Strategic Planning"]
    },
    {
      title: "Data Analytics & Operations Specialist",
      company: "Lone Star Texas Grill",
      period: "2025",
      location: "Toronto, ON",
      type: "Internship",
      achievements: [
        "Developed BigQuery-powered labour forecasting solution using ARIMA modeling",
        "Created interactive Looker Studio dashboard for staffing forecasts and operational insights",
        "Joined, cleansed, and profiled large datasets (RawSales and RawLab tables)",
        "Authored comprehensive analysis report with compliance considerations and operational recommendations"
      ],
      skills: ["BigQuery", "Data Analysis", "ARIMA Modeling", "Looker Studio", "SQL", "Forecasting"]
    },
    {
      title: "Virtual Campus Account Manager Intern",
      company: "Canadian Marketing League",
      period: "2024",
      location: "Remote",
      type: "Internship (4 months)",
      achievements: [
        "Represented Schulich School of Business and managed national marketing campaigns",
        "Built relationships across Canada with professors/students and collaborated with fellow interns",
        "Attended workshops and meetings to enhance teamwork and strategic skills"
      ],
      skills: ["Campaign Management", "Relationship Building", "Strategic Communication"]
    },
    {
      title: "Market Research & Outreach Intern",
      company: "The Kind Pet",
      period: "2025",
      location: "Remote",
      type: "Internship (3 months)",
      achievements: [
        "Researched and identified 40+ independent U.S. pet boutiques aligned with sustainable brand values",
        "Compiled comprehensive store profiles including contact details and social insights for outreach",
        "Assessed brand compatibility and potential for strategic retail partnerships",
        "Produced final business development report with actionable recommendations for future growth"
      ],
      skills: ["Market Research", "B2B Outreach", "Strategic Analysis", "Report Writing"]
    },
    {
      title: "Marketing Manager & Coach",
      company: "Gymnastics at Viva RGC",
      period: "2020 - 2025",
      location: "Toronto, ON",
      type: "Co-owner",
      achievements: [
        "Organized five major athletic competitions, including the 2018 Ontario Gymnastics Championship",
        "Managed social media platforms and email marketing campaigns to engage the community",
        "Provided customer support and mentorship throughout the training process",
        "Licensed Gym Mental Health Performance Coach and certified Level 1 Gymnastics & Rhythmic Gymnastics Coach since 2020"
      ],
      skills: ["Event Management", "Social Media Marketing", "Community Engagement", "Leadership"]
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content card">
                <div className="experience-header">
                  <h3 className="job-title">{exp.title}</h3>
                  <div className="company-info">
                    <h4 className="company-name">{exp.company}</h4>
                    <div className="job-details">
                      <span className="job-period">
                        <FaCalendarAlt /> {exp.period}
                      </span>
                      <span className="job-location">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                      <span className="job-type">
                        <FaBriefcase /> {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="skills-tags">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
