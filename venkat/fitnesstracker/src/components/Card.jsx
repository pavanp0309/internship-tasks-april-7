import React from 'react';

const Card = ({ fitnessMetrics }) => {
  const { title, emoji, goal, achieved, image } = fitnessMetrics;
  const progress = goal > 0 ? Math.min((achieved / goal) * 100, 100) : 0;
  const goalMet = achieved >= goal;
  const progressClass = progress < 100 ? 'bg-danger' : 'bg-primary';

  let message = '';
  if (progress < 100) message = '🤗 Keep going...🏃';
  else if (progress >= 100) message = '😍 Reached goal 😍';

  return (
    <div className="card mb-4 mx-2" style={{ width: '100%', maxWidth: '400px' }}>
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">
          {title}
          {goalMet && (
            <span className="badge bg-success ms-2">🔥 Completed</span>
          )}
        </h5>
        <h3>{emoji}</h3>
        <p className="card-text">Goal: {goal}</p>
        <p className="card-text">Achieved: {achieved}</p>
        {/* <p className="card-text">Remaining: {remaining}</p> */}
       

        <h6>Progress</h6>
        <div
          className="progress"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className={`progress-bar progress-bar-striped progress-bar-animated ${progressClass}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {message && <p className="fw-bold mt-3">{message}</p>}
      </div>
    </div>
  );
};

export default Card;
