// src/App.jsx
import React, { useState } from "react";
// import FeedbackModal from "./FeedbackModal";
import FeedbackModal from "./components/FeedbackModal";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to our service!</h1>
      <button onClick={() => setIsModalOpen(true)}>
        Give Feedback
      </button>
      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
