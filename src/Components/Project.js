import React from 'react';
import './Project.css';

const Project = ({ project }) => {
  const { title, problem, solution, outcome } = project;
  return (
    <section>
      <h3>{title}</h3>
      <p>
        <h4>Problem</h4>
        {problem}
      </p>
      <p>
        <h4>Solution</h4>
        {solution}
      </p>
      <p>
        <h4>Outcome</h4>
        {outcome}
      </p>
    </section>
  );
};

export default Project;
