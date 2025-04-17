import React from 'react';
import { useParams } from 'react-router-dom';
import projectIdeas from '../data';
import { Link } from 'react-router-dom';



const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectIdeas.find(p => p.projectId === projectId);

  if (!project) {
    return <h2 className="text-center mt-5">Project not found</h2>;
  }

  return (
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="card-title">{project.title}</h3>
          <p className="card-text">{project.description}</p>
          <p><strong>Project ID:</strong> {project.projectId}</p>
          <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
          <p><strong>Difficulty:</strong> {project.difficulty}</p>
          
        </div>
        <div className="mt-2">
                  <Link to="Settings" className="btn btn-outline-info btn-sm">
                    Settings
                  </Link>
                </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
