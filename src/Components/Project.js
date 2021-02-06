import React from 'react';

const Project = ({ project }) => {
  const { title, problem, solution, outcome } = project;
  return (
    <section>
      <h3>{title}</h3>
      <h4>Problem</h4>
      <p>{problem}</p>
      <h4>Solution</h4>
      <p>{solution}</p>
      <h4>Outcome</h4>
      <p>{outcome}</p>
    </section>
  );
};

export default Project;
