// src/FeedbackModal.jsx
import React, { useState } from "react";
import styles from "./FeedbackModal.module.css";

function FeedbackModal({ isOpen, onClose }) {
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleScoreChange = (event) => {
    setScore(Number(event.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (score !== null) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setScore(null);
    setSubmitted(false);
  };

  const getEmoji = () => {
    if (score <= 4) return "😠";
    if (score <= 7) return "😐";
    return "😄";
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {!submitted ? (
          <>
            <h2>How likely are you to recommend us?</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.radioGroup}>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <label key={num}>
                    <input
                      type="radio"
                      name="score"
                      value={num}
                      checked={score === num}
                      onChange={handleScoreChange}
                    />
                    {num}
                  </label>
                ))}
              </div>
              <button type="submit" disabled={score === null}>
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className={styles.thankYou}>
            <h2>Thank you for your feedback!</h2>
            <div className={styles.emoji}>{getEmoji()}</div>
            <button onClick={handleReset}>Submit Another</button>
          </div>
        )}
        <button className={styles.closeBtn} onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
}

export default FeedbackModal;
