import React, { useState } from 'react';

function FeedbackModal({ isVisible, onClose }) {
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setScore(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (score !== null) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setScore(null);
    setFeedback('');
    setSubmitted(false);
  };

  const getEmoji = () => {
    if (score <= 4) return '😣';
    if (score <= 7) return '🙂';
    return '🥳';
  };

  if (!isVisible) return null;

  return (
    <div className="modal-backdrop-custom d-flex justify-content-center align-items-center">
      <div className="bg-white p-4 rounded shadow-lg modal-box-custom animate-fade position-relative">
        <button className="btn-close position-absolute top-0 end-0 m-3" onClick={onClose}></button>

        {!submitted ? (
          <>
            <h4 className="mb-3 text-center text-dark">How likely are you to recommend us?</h4>
            <p className="text-muted text-center">
              Your feedback helps us improve. Please take a moment to rate your experience.
            </p>

            <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between mb-3 flex-wrap flex-md-nowrap number-row gap-2">
              {[...Array(10)].map((_, i) => (
                <label key={i + 1} className="form-check form-check-inline text-center">
                  <input
                    type="radio"
                    value={i + 1}
                    checked={score === i + 1}
                    onChange={handleChange}
                    className="form-check-input me-1"
                  />
                  {i + 1}
                </label>
              ))}
            </div>
              {/* Show textarea after score is selected */}
              {score !== null && (
                <div className="mb-3">
                  <label htmlFor="feedback" className="form-label fw-semibold">
                    Additional Comments (optional)
                  </label>
                  <textarea
                    id="feedback"
                    className="form-control"
                    rows="3"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="What did you like or what can we improve?"
                  ></textarea>
                </div>
              )}

              <div className="text-center">
                <button
                  className="btn btn-primary btn-hover"
                  type="submit"
                  disabled={score === null}
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="display-4">{getEmoji()}</div>
            <h5 className="mt-3 text-success">Thanks for your feedback!</h5>
            {feedback && (
              <p className="mt-2 fst-italic text-muted">“{feedback}”</p>
            )}
            <button
              className="btn btn-outline-secondary mt-3 btn-hover"
              onClick={handleReset}
            >
              Submit Another
            </button>
          </div>
        )}

        <p className="text-center text-muted small mt-4 mb-0">
          We value every opinion and use your input to grow and serve you better 💙
        </p>
      </div>
    </div>
  );
}

export default FeedbackModal;
