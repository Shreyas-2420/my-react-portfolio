import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'Puzzle Game 🧩 | A fun jigsaw puzzle game where players upload an image and solve the puzzle !Test your skills and beat the clock! 🚀.',
    link: 'https://shreyas24-20.netlify.app',
  },
  {
    title: 'Project Two',
    description: 'An awesome Node.js API for managing tasks.',
    link: 'https://github.com/shreyasm/project-two',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(({ title, description, link }) => (
          <div key={title} className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn">Let's Play</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;