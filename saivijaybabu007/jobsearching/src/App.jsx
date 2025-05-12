import React, { useState, useEffect } from 'react';
import Approuter from './routes/Approuter';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEmLoggedIn, setIsEmLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    setIsEmLoggedIn(localStorage.getItem('isEmLoggedIn') === 'true');
  }, []);

  return (
    <Approuter
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      isEmLoggedIn={isEmLoggedIn}
      setIsEmLoggedIn={setIsEmLoggedIn}
    />
  );
};

export default App;
