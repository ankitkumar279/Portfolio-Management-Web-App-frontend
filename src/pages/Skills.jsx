import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaLaptopCode, FaTools, FaCertificate } from "react-icons/fa";
import "../App.css";

const API_BASE = process.env.REACT_APP_API_URL;

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [tools, setTools] = useState([]);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/api/skills`)
      .then((res) => setSkills(res.data))
      .catch((err) => console.error("Skills error:", err));

    axios.get(`${API_BASE}/api/tools`)
      .then((res) => setTools(res.data))
      .catch((err) => console.error("Tools error:", err));

    axios.get(`${API_BASE}/api/certifications`)
      .then((res) => setCertifications(res.data))
      .catch((err) => console.error("Cert error:", err));
  }, []);

  return (
    <div className="skills-page">
      <div className="skills-header">
        <h2>Skills & Expertise</h2>
        <p>
          A comprehensive overview of my technical abilities and professional competencies
        </p>
      </div>

      <div className="skills-tools-container">
        <div className="outer-box-horizontal">
          <h3><FaLaptopCode /> Skills</h3>
          <div className="inner-box-vertical">
            {skills.length === 0 ? (
              <p>Loading skills...</p>
            ) : (
              skills.map((skill) => (
                <div key={skill._id} className="skill-item-vertical">
                  <strong>{skill.name}</strong><br />
                  Category: {skill.category || "N/A"}<br />
                  Level: {skill.level || "N/A"}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="outer-box-horizontal">
          <h3><FaTools /> Tools & Others</h3>
          <div className="inner-box-vertical">
            {tools.length === 0 ? (
              <p>Loading tools...</p>
            ) : (
              tools.map((tool) => (
                <div key={tool._id} className="skill-item-vertical">
                  <strong>{tool.name}</strong><br />
                  Category: {tool.category || "N/A"}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="certifications-section">
        <h2><FaCertificate /> Certifications & Learning</h2>
        <div className="certifications-grid">
          {certifications.length === 0 ? (
            <p>Loading certifications...</p>
          ) : (
            certifications.map((cert) => (
              <div key={cert._id} className="cert-card">
                <h4>{cert.title}</h4>
                <p>Provider: {cert.provider || cert.issuer || "N/A"}</p>
                <p>Year: {cert.year || cert.issuedDate || "N/A"}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
