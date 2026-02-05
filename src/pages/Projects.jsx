import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h2>Featured Projects</h2>
        <p>A collection of my recent work showcasing modern web development and innovative solutions</p>
      </div>

      <div className="projects-grid">
        {projects.length === 0 ? (
          <p>No projects yet.</p>
        ) : (
          projects.map((project) => (
            <div key={project._id} className="project-card">
              <img 
                src={project.image || "https://via.placeholder.com/400x200"} 
                alt={project.title} 
              />

              <div className="project-body">
                <h3>{project.title}</h3>

                <p>
                  {project.description.length > 100 
                    ? project.description.substring(0, 100) + "..." 
                    : project.description}
                </p>

                {/* Only show tech if available */}
                {project.tech && project.tech.length > 0 && (
                  <div className="project-tech">
                    {project.tech.map((t, i) => (
                      <span key={i}>{t}</span>
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
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
