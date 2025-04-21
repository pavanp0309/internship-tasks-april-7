import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dummyProjects from '../data/data';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = dummyProjects.find((p) => p.id === parseInt(id));

  if (!project) return <h2 className="text-white p-4">Project not found</h2>;

  return (
    <div className="container text-white py-4">
      <h2 className="mb-3">{project.name}</h2>
      <img
        src={project.image}
        alt={project.name}
        style={{
          width: '100%',
          maxWidth: '600px',
          marginTop: '1rem',
          borderRadius: '10px',
        }}
      />
      <div className="mb-4 p-4">
        <p><strong>Status:</strong> {project.status}</p>
        <p><strong>Description:</strong> {project.description}</p>
        <p><strong>Start Date:</strong> {project.startDate}</p>
        <p><strong>End Date:</strong> {project.endDate}</p>
        <p><strong>Budget:</strong> {project.budget}</p>
      </div>

      {/* Settings Button */}
      <button
        className="btn btn-outline-light btn-sm me-3"
        onClick={() => navigate(`/console/projects/${project.id}/settings`)}
      >
        Settings
      </button>
    </div>
  );
};

export default ProjectDetails;
