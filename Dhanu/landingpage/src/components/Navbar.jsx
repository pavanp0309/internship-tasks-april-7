import React from 'react'

const Navbar = () => {
  return (
    <div className='container'>
        {/* navbar start */}
      <nav class="navbar navbar-expand-lg  ">
  <div class="container-fluid">
            <div className="d-flex align-items-center mb-2">
              <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', fontWeight: 'bold' }}>
                i
              </div>
              <span className="ms-2 fw-bold">HomeLoanGurus</span>
            </div>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item ">
          <a class="nav-link active"  href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  href="#">Aboutus</a>
        </li>
         
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        {/* navbar end */}
      
    </div>
  )
}

export default Navbar