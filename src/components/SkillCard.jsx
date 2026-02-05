import React from 'react';
import "../App.css";

const SkillCard = ({ skill }) => (
  <div className="card">
    <div className="card-body">
      <h5>{skill.name}</h5>
      <p>Level: {skill.level}</p>
      <p>Category: {skill.category || 'N/A'}</p>
    </div>
  </div>
);

export default SkillCard;
