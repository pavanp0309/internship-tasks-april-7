import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { logout } from '../auth'
import dummyProjects from '../data/data'

const Project = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="navbar-inner">
          <span className="navbar-brand mb-0 h1">ADMIN DASHBOARD</span>
          <button className="button" type="submit" onClick={handleLogout}>LOGOUT</button>
        </div>
      </nav>
      <div className="dashboard-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h5 className="mb-4">SIDEBAR</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <NavLink className="nav-link" to="/console/project">Project</NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink className="nav-link" to="/console/activity">Activity</NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink className="nav-link" to="/console/billing">Billing</NavLink>
            </li>
          </ul>
        </div>
        {/* Main content */}
        <div className="dashboard-main">
          <div className="container my-5">
            <h2 className="mb-4 text-center fst-italic p-2 text-success">"The Art of Creating Impactful Projects"</h2>
            <div className="row justify-content-center">
              {dummyProjects.map(project => (
                <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
                  <div className="card h-100 shadow">
                    <div className="card-body">
                      <h5 className="card-title">{project.name}</h5>
                      <p className="card-text">{project.description}</p>
                    </div>
                    <div className="m-2 text-center text-uppercase fs-1 p-2">
                      <NavLink to={`/console/project/${project.id}`} className="btn btn-outline-danger btn-sm">
                        View Project {project.id}
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

