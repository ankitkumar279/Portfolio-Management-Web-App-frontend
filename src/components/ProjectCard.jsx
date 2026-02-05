import React from 'react';
import "../App.css";

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image || "https://via.placeholder.com/400x200"} alt={project.title} />

    <div className="project-content">
      <h2>{project.title}</h2>

      <p>
        {project.description.length > 120
          ? project.description.substring(0, 120) + "..."
          : project.description}
      </p>

      {project.tech && project.tech.length > 0 && (
        <div className="project-tech">
          {project.tech.map((tech, idx) => (
            <span key={idx}>{tech}</span>
          ))}
        </div>
      )}

      <div className="project-links">
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">Code</a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
