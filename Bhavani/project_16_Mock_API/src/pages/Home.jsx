import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import HeroComponent from '../components/HeroComponent';
import MarqueeSlider from '../components/MarqueeSlider';
import p1 from '../assets/p1 .png';

const categories = [
  { name: "Remote", logo: "🏠" },
  { name: "MNC", logo: "🏢" },
  { name: "Analytics", logo: "📊" },
  { name: "Marketing", logo: "📈" },
  { name: "Startup", logo: "🚀" },
  { name: "Sales", logo: "🛒" },
  { name: "Engineering", logo: "⚙️" },
  { name: "Fortune 500", logo: "💼" },
  { name: "Data Science", logo: "📚" },
  { name: "Banking", logo: "🏦" },
  { name: "Software", logo: "💻" },
  { name: "Consulting", logo: "🧠" },
  { name: "Healthcare", logo: "🏥" },
  { name: "Education", logo: "🎓" },
];

const Home = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  const [visibleCompanies, setVisibleCompanies] = useState(4); // Initially show 4 companies
  const navigate = useNavigate(); // Using useNavigate instead of useHistory

  const firstRow = categories.slice(0, 7);
  const secondRow = categories.slice(7, 14);

  // Card rendering function for Categories
  const renderCards = (cards) => (
    <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
      {cards.map((item, index) => (
        <div key={index} className="card shadow-sm" style={{ width: '180px', borderRadius: '12px' }}>
          <div className="card-body d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div style={{ fontSize: '2rem' }}>{item.logo}</div>
              <h6 className="card-title ms-2 mb-0">{item.name}</h6>
              <div style={{ fontSize: '1.2rem' }}>→</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Fetch companies when page loads`
  useEffect(() => {
    fetch('http://localhost:3000/companies') // we will use our endpoint from db.json
      .then(response => response.json())
      .then(data => setCompanies(data))
      .catch(error => console.error('Error fetching companies:', error));

    // Check if the user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true); // If user is logged in, set the state to true
    }
  }, []);

  // Render Companies Cards based on visibility and login status
  const renderCompanyCards = () => {
    const companiesToShow = isLoggedIn ? companies : companies.slice(0, visibleCompanies); // Show all if logged in, else show partial
    return (
      <div className="d-flex justify-content-center flex-wrap gap-3">
        {companiesToShow.map((company, index) => (
          <div key={index} className="card shadow-sm p-3" style={{ width: '220px', borderRadius: '12px', textAlign: 'center' }}>
            <img
              src={company.logo}
              alt={company.name}
              style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto' }}
            />
            <h5 className="mt-3">{company.name}</h5>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>{company.description}</p>
            <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
              <span>⭐ {company.rating}</span>
              <span>({company.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Handle "View More" click
  const handleViewMore = () => {
    // Redirect to login page
    navigate('/login'); // Using navigate() from useNavigate
  };

  // Handle Login (for simulation purposes, store in localStorage)
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true'); // Simulate login and store status
    setIsLoggedIn(true);
    navigate('/'); // Redirect to home after login
  };

  return (
    <div className='container-fluid'>
      <HeroComponent />
      <MarqueeSlider />
      <h1 className='fs-2 text-center p-3 m-3'>Choose Your Desired Category</h1>

      {/* First 7 Cards */}
      {renderCards(firstRow)}

      {/* Second 7 Cards */}
      {renderCards(secondRow)}

      {/* Companies Section */}
      <h1 className='fs-2 text-center p-3 m-3'>Top Companies Hiring</h1>
      {renderCompanyCards()}

      {/* View More Button (Only when not logged in) */}
      {!isLoggedIn && visibleCompanies < companies.length && (
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={handleViewMore}>
            View More
          </button>
        </div>
      )}

      {/* Premium Services Section */}
      <div className="text-center p-4">
        <h1 className="text-center fs-2 p-4">Your Premium Services</h1>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {["Resume Building", "AI Mock Interview", "Courses", "Career Counseling", "Certification Programs", "Job Assistance"].map((service, index) => (
            <div key={index} className="card text-uppercase fw-bold" style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '10px', width: '300px', textAlign: 'center' }}>
              {service}
            </div>
          ))}
        </div>
      </div>

      {/* Background Section */}
      <div className="container-fluid p-0">
        <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
          <img
            src={p1}
            alt="Newsletter Background"
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;