import React from 'react'

const Navbar = () => {
  return (
    <div>
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" style={{fontFamily:"fantasy"}} href="#">MAJOR KALSHI CLASSES</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">
        <li className="nav-item ">
          <a className="nav-link active " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ative" href="#">Aboutus</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="true">Courses</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
    
 
    
  )
}

export default Navbar
