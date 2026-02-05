import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import SkillBar from "../components/SkillBar";
import Footer from "../components/Footer";
import "@google/model-viewer";

const Home = () => {
  const [resumeUrl, setResumeUrl] = useState(null);

  // Fetch resume from backend API
  useEffect(() => {
    fetch("http://localhost:5000/api/resume")
      .then((res) => res.json())
      .then((data) => {
        if (data.resumeUrl) {
          setResumeUrl(`http://localhost:5000${data.resumeUrl}`);
        }
      })
      .catch((err) => console.error("Error fetching resume:", err));
  }, []);

  return (
    <div>
      <section className="home-hero">
        <div className="hero-left">
          <h2>Hello, I'm</h2>
          <h1>Ankit Kumar</h1>
          <p>
            Crafting exceptional digital experiences through innovative code and
            design. Specializing in modern web technologies and user-centric
            solutions.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-filled">
              View My Work
            </Link>

            {resumeUrl ? (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                Resume
              </a>
            ) : (
              <button className="btn btn-outline" disabled>
                Resume not uploaded
              </button>
            )}
          </div>

          <SocialIcons />
        </div>

        <div className="hero-right">
          <model-viewer
            src="https://models.readyplayer.me/693bed61e37c2412ef885975.glb"
            alt="3D Avatar"
            camera-controls
            style={{ zIndex: 0, opacity: 0.8 }}
          ></model-viewer>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="core-expertise">
        <h2>Core Expertise</h2>
        <p>Technologies I work with daily</p>
        <div className="skills-grid">
          <SkillBar skill="React" percent={95} />
          <SkillBar skill="TypeScript" percent={90} />
          <SkillBar skill="Node.js" percent={85} />
          <SkillBar skill="UI/UX Design" percent={88} />
        </div>
      </section>


    </div>
  );
};

export default Home;
