import React from 'react';
import Project from './Project.jsx';
import '../styles/Projects.css';

const Projects = () => {
  const projectsInfo = {
    one: {
      name: 'Revive',
      desc: 'A full-stack web application used for journaling & taking notes ',
      githubLink: 'https://github.com/meghnaaallam/Revive',
      techs: ['React', 'Redux', 'Node', 'Express', 'MongoDB', 'SASS'],
    },
    two: {
      name: 'GoalIT',
      desc: 'A goal tracker to make new goals and own this new year.',
      githubLink: 'https://github.com/meghnaaallam/goalit-24',
      techs: ['React','Redux','SQLite', 'Django', 'Redux'],
    },
    three: {
      name: 'FurEverHome',
      desc: 'An app built to buy/ sell/ adopt animals',
      githubLink: 'https://github.com/meghnaaallam/FurEverHome',
      techs: ['Java', 'MySQL', 'JavaFX'],
    },
    four: {
      name: 'Assignment Submission Portal',
      desc: 'An Assignment Submission RESTful API deployed on AWS with GitHub Actions to build AMI Images ',
      githubLink: 'https://github.com/meghnaaallam/webapp',
      techs: ['Node', 'Express', 'Sequelize', 'AWS', 'CI/CD', 'Packer', 'Pulumi'],
    }
  }
  return (
    <div className="Projects" id="projects" >
      <h2>My Projects</h2>
      <div>
        <Project info={projectsInfo.one} />
        <Project info={projectsInfo.two} />
        <Project info={projectsInfo.three} />
        <Project info={projectsInfo.four} />
      </div>
    </div>
  )
}

export default Projects;
