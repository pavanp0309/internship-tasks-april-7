import React from 'react'
import Properties from '../components/Properties';
import Card from '../components/Card';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = React.useState(null);

  const renderComponent = () => {
    if (activeComponent === 'Properties') return <Properties />;
    if (activeComponent === 'Card') return <Card />;
    return null;
  };

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h2>Login Page</h2>
          <button className='btn btn-success' onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <div className="list-group">
            <button
              className="list-group-item list-group-item-action active"
              aria-current="true"
              onClick={() => setActiveComponent('Properties')}
            >
              Properties
            </button>
            <button
              className="list-group-item list-group-item-action"
              onClick={() => setActiveComponent('Card')}
            >
              Blog UI
            </button>
          </div>
          <div>{renderComponent()}</div>
          <button
            className="btn btn-danger mt-3"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Dashboard