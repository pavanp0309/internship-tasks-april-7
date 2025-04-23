import React, { useState } from "react";
import FeedbackModal from "./components/FeedbackModal";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-start pt-5">
      <div className="text-center">
        <h1 className="m-4">Welcome to NPS Feedback</h1>
        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          Give Feedback
        </button>
      </div>

      <FeedbackModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default App;
