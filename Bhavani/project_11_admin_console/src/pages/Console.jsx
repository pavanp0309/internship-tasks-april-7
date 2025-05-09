import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import {logout} from '../auth'
import { useNavigate } from 'react-router-dom'

const Console = () => {
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
      {/* {/* Sidebar */}
      <div className="sidebar">
        <h5 className="mb-4">SIDEBAR</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <NavLink className="nav-link" to="project">Project</NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink className="nav-link" to="activity">Activity</NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink className="nav-link" to="billing">Billing</NavLink>
          </li>
        </ul>
      </div>
      {/* Main content */}
      <div className="dashboard-main">
        <Outlet />
      </div>
    </div>
    
    </>
  )
}

export default Console
