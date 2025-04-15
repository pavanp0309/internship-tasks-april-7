import React from 'react';

const Card = ({ fitnessMetrics }) => {
  
  const { title, emoji, goal, achieved } = fitnessMetrics;
  const progress = Math.min((achieved / goal) * 100, 100);
  const goalMet = achieved >= goal;

  const progressClass = progress < 100 ? 'bg-danger' : 'bg-primary';

  let message = '';
  if (progress < 100) message = '🔥 Keep going!';
  else if (progress >= 100) message = '🚀 You crushed it!';
  else message = '';

  return (
    <div className="card mb-3 p-4 mt-4 mx-4" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
        <img src={fitnessMetrics.image} className="card-img-top" style={{height: '99%', objectFit: 'cover'}}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}{goalMet && (<span className="badge bg-success ms-2">🎯 Goal Met</span>)}</h5>
            <h3>{emoji}</h3>
            <p className="card-text">Goal: {goal}</p>
            <p className="card-text">Achieved: {achieved}</p>
            
            <h6>PROGRESSBAR</h6>
            <div className="progress" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
              <div className={`progress-bar progress-bar-striped progress-bar-animated ${progressClass}`}
                style={{ width: `${progress}%` }}>
              </div>
            </div>
            {message && <p className="fw-bold p-4">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
