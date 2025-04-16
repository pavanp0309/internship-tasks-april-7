import React from 'react';
import Card from './components/Card';
import sessions from './data/data';

const App = () => {
  return (
    <div className='container text-center '>
      <h1 className='text-primary'><b>Meditation Sessions</b></h1>
    <div className="min-vh-100 py-5" style={{ background: 'linear-gradient(135deg,rgb(195, 125, 165), #80deea)', }}>
      <div className="row justify-content-center gap-4 px-3">
        {sessions.map((session) => (
          <div className="col-md-3 col-sm-6 d-flex" key={session.id}>
            <Card sessions={session} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default App;
