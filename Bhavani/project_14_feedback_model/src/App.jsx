import React, { useState } from 'react';
import FeedbackModal from './components/FeedbackModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app-background d-flex align-items-center justify-content-center">
      <div className="container text-center text-white py-5">
        <h1 className="mb-3 display-5 fw-bold">Welcome to Our Experience Hub 🎉</h1>
        <p className="lead mb-4">
          We’re thrilled to have you here! Your opinion matters, and we’d love to know how we're doing.
          Help us shape the future of our platform by sharing your thoughts below.
        </p>

        <div className="my-4">
          <button
            className="btn btn-lg btn-warning fw-bold px-4 py-2 btn-hover"
            onClick={() => setShowModal(true)}
          >
            💬 Share Your Feedback
          </button>
        </div>

        <p className="small fst-italic mt-3">
          It only takes a few seconds to make a big difference.
        </p>

        <footer className="mt-5 pt-4 border-top border-light">
          <p className="text-white-50 small">
            &copy; {new Date().getFullYear()} Experience Hub | Made with 💙 for our users.
          </p>
        </footer>
      </div>

      <FeedbackModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
