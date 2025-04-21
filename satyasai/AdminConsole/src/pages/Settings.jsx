import React from 'react';
import { useParams } from 'react-router-dom';
import dummyProjects from '../data/data';

const Settings = () => {
  const { id } = useParams();
  const project = dummyProjects.find((p) => p.id === parseInt(id));

  if (!project) return <h2 className="text-white p-4">Project not found</h2>;

  return (
    <div className="container text-white py-4">
      <h2>⚙️ Settings for: {project.name}</h2>
      <div className="mt-3">
        <p><strong>Project ID:</strong> {project.id}</p>
        <p><strong>Status:</strong> {project.status}</p>
        <p><strong>Budget:</strong> {project.budget}</p>
        <p><strong>Timeline:</strong> {project.startDate} → {project.endDate}</p>
        <button className="btn btn-light mt-3">Save Changes</button>
      </div>
    </div>
  );
};

export default Settings;
