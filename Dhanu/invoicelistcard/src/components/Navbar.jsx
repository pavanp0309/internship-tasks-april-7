import React from 'react'

const Navbar = () => {
  return (
    
       
      <nav className="navbar navbar-expand-lg bg-white  ">
  <div className="container-fluid">
            <div className="d-flex align-items-center mb-2">
              {/* <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', fontWeight: 'bold' }}>
                i
              </div> */}
              <span className="ms-2 fw-bold">Invoice Listings</span>
            </div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link active"  href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  href="#">Aboutus</a>
        </li>
         
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        
      
    
  )
}

export default Navbar