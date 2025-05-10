import React from 'react'
import { useState } from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [score, setScore] = useState(0)

  const handleScoreChange = (newScore) => {
    if (newScore >= 1 && newScore <= 10) {
      setScore(newScore);
    }
  };

  const handleSubmit = (e) => {
   
    if (score >= 1 && score <= 10) {
      alert(`Score submitted: ${score} Thank you!`);
    } else {
      alert('Please enter a score between 1 and 10');
    }
  }

  return (
    <div className='container'>
      <h1 className='text-center'>Score Keeper</h1>

      <h1>Score: {score}</h1>
      <div className="radio-buttons">
        {[...Array(10)].map((_, index) => {
          const value = index + 1;
          return (
            <div key={value} className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="score"
                id={`score-${value}`}
                value={value}
                checked={score === value}
                onChange={() => handleScoreChange(value)}
              />
              <label className="form-check-label" htmlFor={`score-${value}`}>
                {value}
              </label>
            </div>
          );
        })}
      </div>
      <button className='btn btn-success my-3' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App
