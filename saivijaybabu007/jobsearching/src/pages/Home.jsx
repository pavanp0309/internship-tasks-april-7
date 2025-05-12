import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { chooseCardData, scrollingimgs } from '../data/choosecarddata';

const Home = ({ isLoggedIn }) => {
  const [postsList, setPostsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const navigate = useNavigate();

  // Fetch Jobs
  const loadJobs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/db.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      if (Array.isArray(data.mockJobsList)) {
        setPostsList(data.mockJobsList);
      } else {
        throw new Error('Data format is incorrect');
      }
    } catch (err) {
      console.error('Error fetching jobs:', err);
      setError('Failed to load jobs. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  // Handle View More / Less with login check
  const handleViewMoreLess = () => {
    if (isLoggedIn) {
      setShowAllPosts(!showAllPosts); 
    } else {
      navigate('/login');             
    }
  };

  return (
    <>
      {/* Hero Section */}
      <img src="/src/assets/herobgbanner.avif" alt="Banner" id="banner-img" />

      {/* Marquee Section */}
      <div className="scroll">
        <Marquee speed={50}>
          {scrollingimgs.map((item, index) => (
            <img key={index} src={item.src} alt={item.alt} className="marquee-img" />
          ))}
        </Marquee>
      </div>

      {/* Main Content */}
      <div className="container">
        
        {/* Choose Your Category Section */}
        <h1 className="text-center my-4">Choose Your Desired Category</h1>
        <div className="row">
          {chooseCardData.map((item, index) => (
            <div key={index} className="col-4 col-sm-4 col-md-2 col-lg-2 d-flex flex-column align-items-center my-2">
              <div className="card d-flex justify-content-center align-items-center p-2" id="choose-card">
                <div className="d-flex align-items-center justify-content-center">
                  <i className={`bi ${item.icon}`} id="icon"></i>
                  <h5 className="mt-2 mx-1">{item.label}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Latest Company Posts Section */}
        <h1 className="text-center my-4">Latest Company Posts</h1>

        {isLoading && <p>Loading posts...</p>}
        {error && <p className="text-danger">{error}</p>}

        {!isLoading && !error && (
          <>
            <div className="row">
              {/* Render only the first 3 posts initially, or all if showAllPosts is true */}
              {postsList.slice(0, showAllPosts ? postsList.length : 3).map((job) => {
                const { id, companylogo, title, companyname } = job;
                return (
                  <div key={id} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
                    <div className="card p-2 text-center latest-card">
                      <div className="company-logo mb-2">
                        <img src={companylogo} alt={`${companyname} logo`} id="latest-card" />
                      </div>
                      <div>
                        <h5>{companyname}</h5>
                        <h5>{title}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* View More / View Less Button */}
            <div className="d-flex justify-content-center my-4">
              <button
                className="btn btn-primary"
                onClick={handleViewMoreLess}
              >
                {showAllPosts ? 'View Less' : 'View More'}
              </button>
            </div>
          </>
        )}

        {/* Premium Services Section */}
        <div className="row">
          <h1 className="text-center mb-4">Your Premium Services</h1>

          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card justify-content-center align-items-center my-2" id="premium-card">
              <h1>Resume Building</h1>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card justify-content-center align-items-center my-2" id="premium-card">
              <h1>AI Mock Test</h1>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card justify-content-center align-items-center my-2" id="premium-card">
              <h1>Courses</h1>
            </div>
          </div>
        </div>

      </div>

      {/* Subscribe Banner */}
      <img src="/src/assets/subscribebanner.png" alt="Subscribe Banner" id="subscribe-banner" />
    </>
  );
};

export default Home;
