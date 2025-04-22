import React from 'react';

const ProgressBar = ({ progress }) => {
  const getProgressVariant = () => {
    if (progress < 40) return 'danger';
    if (progress < 70) return 'warning';
    return 'success';
  };

  return (
    <div className="mt-4">
      <div className="text-center fw-semibold mb-2">Profile Completion</div>
      <div className="progress position-relative rounded-pill" style={{ height: '30px' }}>
        <div
          className={`progress-bar bg-${getProgressVariant()} progress-bar-striped progress-bar-animated rounded-pill`}
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="position-absolute w-100 text-center text-white fw-bold">{progress}%</span>
        </div>
      </div>

      <div className="text-center mt-2">
        {progress < 100 ? (
          <span className="text-muted">Keep going! Almost done 💪</span>
        ) : (
          <span className="text-success fw-bold">✅ All steps completed!</span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
