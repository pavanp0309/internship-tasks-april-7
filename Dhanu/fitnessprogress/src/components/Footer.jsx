import React from 'react'
import { FaHome, FaChartLine, FaUserAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="footer-nav bg-dark text-white py-3 mt-4">
              <div className="container d-flex justify-content-around align-items-center">
                <div className="text-center">
                  <FaHome size={24} />
                  <div style={{ fontSize: '0.75rem' }}>Home</div>
                </div>
                <div className="text-center">
                  <FaChartLine size={24} />
                  <div style={{ fontSize: '0.75rem' }}>Stats</div>
                </div>
                <div className="text-center">
                  <FaUserAlt size={24} />
                  <div style={{ fontSize: '0.75rem' }}>Profile</div>
                </div>
              </div>
            </footer>
    </div>
  )
}

export default Footer
