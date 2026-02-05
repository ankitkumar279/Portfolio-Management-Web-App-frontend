import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import "../App.css";

const SocialIcons = () => (
  <div className="social-icons">
    <a href="https://github.com/ankitkumar279" target="_blank" rel="noreferrer">
      <FaGithub size={30} />
    </a>
    <a href="https://www.linkedin.com/in/ankit-kumar-026a2b39a/" target="_blank" rel="noreferrer">
      <FaLinkedin size={30} />
    </a>
    <a href="mailto:ankitchahar88@gmail.com">
      <FaEnvelope size={30} />
    </a>
    <a href="https://www.instagram.com/ankitchahar_jaat/" target="_blank" rel="noreferrer">
      <FaInstagram size={30} />
    </a>
  </div>
);

export default SocialIcons;
