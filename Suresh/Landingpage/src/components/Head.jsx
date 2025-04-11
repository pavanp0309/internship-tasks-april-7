import React from 'react'
import Features from './Product'


const Head = () => {
  return (
   
    <>
         
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" >Landing Page</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button class="nav-link active" aria-current="page" >Home</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" onClick={() => HandleFilter("Features")}>Features</button>
        </li>
        
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Head
