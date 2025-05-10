import { useState } from 'react';

const FeedbackModal = ({ onClose }) => {
  const [selectedScore, setSelectedScore] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleScoreChange = (e) => {
    setSelectedScore(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedScore !== null) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setSelectedScore(null);
    setIsSubmitted(false);
  };

  const getEmoji = () => {
    if (!selectedScore) return null;
    if (selectedScore <= 4) return '😞';
    if (selectedScore <= 7) return '😐';
    return '😊';
  };

  return (
    <div className="feedback-modal">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <h2>How likely are you to recommend us?</h2>
          <div className="score-options">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
              <label key={score} className="score-option">
                <input
                  type="radio"
                  name="nps-score"
                  value={score}
                  checked={selectedScore === score}
                  onChange={handleScoreChange}
                />
                <span>{score}</span>
              </label>
            ))}
          </div>
          <div className="labels">
            <span>Not likely</span>
            <span>Very likely</span>
          </div>
          <button type="submit" disabled={selectedScore === null}>
            Submit Feedback
          </button>
        </form>
      ) : (
        <div className="thank-you">
          <h2>Thank you for your feedback!</h2>
          <div className="emoji">{getEmoji()}</div>
          <p>You rated us: {selectedScore}/10</p>
          <button className='mx-3' onClick={handleReset}>Submit Another Feedback</button>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default FeedbackModal;