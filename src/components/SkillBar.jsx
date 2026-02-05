import React from 'react';
import "../App.css";

const SkillBar = ({ skill, percent }) => (
  <div className="skill-bar">
    <div className="skill-label">{skill}</div>
    <div className="bar">
      <div className="progress" style={{ width: `${percent}%` }}></div>
    </div>
    <div className="skill-percent">{percent}%</div>
  </div>
);

export default SkillBar;
