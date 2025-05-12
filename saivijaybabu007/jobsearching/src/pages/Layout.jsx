import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="container">
    <div className="row">
      {/* Sidebar on left */}
      <div className="col-md-3 col-lg-3 bg-white" style={{ position: 'sticky', top: 0, height: '100vh', overflowY: 'auto' }}>
        <Sidebar />
      </div>

      {/* Job Content on right */}
      <div className="col-md-9 col-lg-9 mt-4">
        <Outlet /> {/* Nested route renders here */}
      </div>
    </div>
  </div>
  )
}

export default Layout
