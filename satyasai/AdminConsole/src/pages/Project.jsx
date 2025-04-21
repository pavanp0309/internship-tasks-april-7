// src/pages/Project.jsx
import React from 'react';
import dummyProjects from '../data/data';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectDetails from './ProjectDetails';

AOS.init();

const Project = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-4">
      <h3 className="text-white mb-4" data-aos="fade-up">📁 Projects</h3>
      <button className='btn btn-primary'>+ Add project</button>
      <div className="row p-4">
        {dummyProjects.map(project => (
          <div
            key={project.id}
            className="col-md-4 mb-4"
            data-aos="fade-up"
            onClick={() => navigate(`/console/project/${project.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card h-100 shadow-sm" style={{ minHeight: '320px' }}>
              <img
                src={project.image}
                className="card-img-top"
                alt={project.name}
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text text-muted">{project.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
