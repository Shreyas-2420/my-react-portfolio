import React from 'react';

// Import skill icons
import jsIcon from '../assets/skills/javascript.svg';
import reactIcon from '../assets/skills/react.svg';
import nodeIcon from '../assets/skills/nodejs.svg';
import expressIcon from '../assets/skills/express.svg';
import mongoIcon from '../assets/skills/mongodb.svg';
import htmlIcon from '../assets/skills/html5.svg';
import cssIcon from '../assets/skills/css3.svg';
import gitIcon from '../assets/skills/git.svg';
import githubIcon from '../assets/skills/github.svg';

const skills = [
  { name: 'JavaScript', icon: jsIcon },
  { name: 'React.js', icon: reactIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Express.js', icon: expressIcon },
  { name: 'MongoDB', icon: mongoIcon },
  { name: 'HTML & CSS', icon: htmlIcon },  // You can show HTML or CSS icon or both
  { name: 'Git & GitHub', icon: gitIcon }, // Or show both separately
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map(({ name, icon }) => (
          <li key={name} className="skill-item">
            <img src={icon} alt={'${name} icon'} className="skill-icon" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;