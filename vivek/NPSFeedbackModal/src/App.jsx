import { useState } from 'react';
import FeedbackModal from './components/Feedback';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <div className="feedback-header">
        <h1>We Value Your Feedback</h1>
        <p className="subtitle">Help us improve by sharing your experience</p>
      </div>
      
      <div className="feedback-cta">
        <button 
          className="feedback-button"
          onClick={() => setShowModal(true)}
        >
          <span className="button-icon">💬</span>
          <span className="button-text">Share Your Feedback</span>
        </button>
        <p className="cta-note">It only takes a minute!</p>
      </div>
      
      {showModal && (
        <div className="modal-overlay">
          <FeedbackModal onClose={() => setShowModal(false)} />
        </div>
      )}
    </div>
  );
}

export default App;



























