// ProjectSettings.js
import React from 'react';
import { useParams } from 'react-router-dom';
import projectIdeas from '../data';

const Settings = () => {
  const { projectId } = useParams();
  const project = projectIdeas.find(p => p.projectId === projectId);

  if (!project) {
    return <h2 className="text-center mt-5">Project not found</h2>;
  }

  return (
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title">Settings for: {project.title}</h4>
          <p><strong>Current Tech Stack:</strong> {project.techStack.join(', ')}</p>
          <p><strong>Difficulty:</strong> {project.difficulty}</p>
          {/* Add form or options to update settings if needed */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
