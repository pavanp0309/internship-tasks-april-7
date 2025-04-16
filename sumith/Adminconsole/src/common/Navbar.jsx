import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="#">Adminconsole</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/Services">Services</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
