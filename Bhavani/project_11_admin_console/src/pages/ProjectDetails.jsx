import React from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import dummyProjects from '../data/data'
import { logout } from '../auth'

const ProjectDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  const project = dummyProjects.find(p => p.id === Number(id))

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  if (!project) {
    return <p className="m-4">Project not found.</p>
  }

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
          <div className="card shadow-sm p-4 m-4" style={{ height: "630px" }}>
            {/* Display Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="card-img-top mb-3"
                style={{ height: "300px", objectFit: 'cover', borderRadius: '5px' }}
              />
            )}
            <div className="card-body">
              <h5 className="card-title fw-bold text-uppercase">
                <i className="bi bi-file-earmark-text me-2"></i>
                {project.name}
              </h5>

              <h6 className="card-subtitle p-2 text-muted">
                <i className="bi bi-circle-fill me-2"></i> Status: {project.status}
              </h6>

              <p className="card-text">
                <i className="bi bi-file-earmark-text me-2"></i>
                {project.description}
              </p>

              <p className="card-text">
                <i className="bi bi-calendar me-2"></i>
                {project.startDate}
              </p>

              <p className="card-text">
                <i className="bi bi-calendar me-2"></i>
                {project.endDate}
              </p>

              <p className="card-text">
                <i className="bi bi-currency-dollar me-2"></i>
                {project.budget}
              </p>

              <NavLink className="btn btn-primary" to={`/console/project/${project.id}/setting`}>
                <i className="bi bi-gear me-2"></i>SETTING
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails
