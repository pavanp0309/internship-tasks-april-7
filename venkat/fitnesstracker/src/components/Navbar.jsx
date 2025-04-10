import React from 'react'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary shadow'>
        <div className='container-fluid'>
            <a className='navbar-brand ms-3 px-2 fw-bold' href='#'>Fitness Tracker</a>

            <button
             className='navbar-toggler'
             type='button'
             data-bs-toggle='collapse'
             data-bs-target='#navbarNav'
             aria-controls='navbarNav'
             aira-expanded='false'
             aria-lable='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>


            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav mx-auto'>
                    <li className='nav-item'>
                        <a className='nav-link active' aria-current='page' href='#'>Profile</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>Tracker</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">🔍</button>
                </form>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
