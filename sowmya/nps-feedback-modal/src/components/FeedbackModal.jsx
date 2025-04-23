import React, { useState } from "react";

const FeedbackModal = ({ isVisible, onClose }) => {
  const [score, setScore] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleScoreChange = (e) => {
    setScore(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (score !== null) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setScore(null);
    setIsSubmitted(false);
  };

  const getEmojiFeedback = () => {
    if (score <= 4) return "😡";
    if (score <= 7) return "😐";
    return "😊";
  };

  if (!isVisible) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3">
          <div className="modal-header">
            <h5 className="modal-title">Rate Your Experience</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Select a score (1-10):</label>
                  <div className="d-flex flex-wrap gap-2">
                    {[...Array(10)].map((_, index) => (
                      <div className="form-check form-check-inline" key={index + 1}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="score"
                          id={`score${index + 1}`}
                          value={index + 1}
                          checked={score === index + 1}
                          onChange={handleScoreChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`score${index + 1}`}
                        >
                          {index + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Submit
                </button>
              </form>
            ) : (
              <div className="text-center">
                <h4>Thank you for your feedback!</h4>
                <div className="display-4">{getEmojiFeedback()}</div>
                <button className="btn btn-secondary mt-3" onClick={handleReset}>
                  Submit Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
