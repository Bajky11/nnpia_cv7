import React from 'react';

const ReactConcept = ({ title, description }) => {
  return (
    <div className="concept">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ReactConcept;