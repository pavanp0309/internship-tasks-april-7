import React from 'react';
import { Link } from 'react-router-dom';
import projectIdeas from '../data';

const Projects = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Frontend Project Ideas</h2>
      <div className="row">
        {projectIdeas.map((project) => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>Tech Stack: </strong>{project.techStack.join(', ')}
                  </div>
                  <div>
                    <strong>Difficulty: </strong>{project.difficulty}
                  </div>
                </div>
                {/* Project ID clickable link */}
                <div className="mt-2">
                  <Link to={`/dashboard/projects/${project.projectId}`} className="btn btn-outline-info btn-sm">
                    View Project {project.projectId}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
