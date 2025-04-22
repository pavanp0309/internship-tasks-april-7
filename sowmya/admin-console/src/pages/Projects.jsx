import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Projects = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container my-4">
      {!projectId ? (
        <div className="row m-5 justify-content-center">
          {[1, 2, 3].map((id) => (
            <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex justify-content-center" key={id}>
              <div className="card h-100 w-75">
                <div className="card-body">
                  <h5 className="card-title">Project {id}</h5>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => navigate(`/console/projects/${id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="container">
          <h4>Project ID: {projectId}</h4>
          <button
            className="btn btn-info mt-3"
            onClick={() => navigate(`/console/projects/${projectId}/settings`)}
          >
            Go to Settings
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
