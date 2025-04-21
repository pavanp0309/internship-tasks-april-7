import React from 'react';
import { Outlet, Link } from 'react-router-dom'; // Add Link and Outlet
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Console = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', color: '#fff' }}>
      
      {/* Sidebar */}
      <aside
        className="p-4"
        style={{
          width: '220px',
          backgroundColor: '#1c1c1e',
          boxShadow: '2px 0 5px rgba(0,0,0,0.3)',
        }}
        data-aos="fade-right"
      >
        <h4>🔧 Admin</h4>
        <ul className="list-unstyled mt-4">
          <li className="mb-3">
            <Link to="projects" className="text-white text-decoration-none">📁 Projects</Link> {/* ✅ Use Link for routing */}
          </li>
          <li className="mb-3">
          <Link to="billing" className="text-white text-decoration-none">💳 Billing</Link>
          </li><li className="mb-3">
          <Link to="activity" className="text-white text-decoration-none">📊 Activity</Link>
          </li>
          
          <li className="mt-5"><a href="/" className="text-danger text-decoration-none">🚪 Logout</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-grow-1">
        <nav
          className="d-flex justify-content-between align-items-center px-4 py-3"
          style={{
            backgroundColor: '#2b2b2e',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
          data-aos="fade-down"
        >
          <h5 className="m-0">📊 Admin Console</h5>
          <span>Welcome, Admin</span>
        </nav>
        <div>
        
        </div>

        {/* Nested content appears here */}
        <Outlet /> {/* ✅ This renders the nested route like /console/projects */}
      </div>
    </div>
  );
};

export default Console;
