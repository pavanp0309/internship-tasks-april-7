import React from 'react'
import NavBar from './Components/NavBar'
import Card from './Components/Card';

const App = () => {
  const fitnessMetrics = [
    {
      id: 1,
      title: "Steps",
      emoji: "🚶‍♂️",
      goal: 10000,
      achieved: 8500,
      image:"./src/assets/steps.jpg"
    },
    {
      id: 2,
      title: "Water Intake",
      emoji: "💧",
      goal: 3000, 
      achieved: 1800,
      image:"./src/assets/water-intake.webp"
    },
    {
      id: 3,
      title: "Calories Burned",
      emoji: "🔥",
      goal: 500,
      achieved: 510,
      image:"./src/assets/calories.webp"
    },
    {
      id: 4,
      title: "Workout Time",
      emoji: "⏱️",
      goal: 60, 
      achieved: 60,
      image:"./src/assets/Workout.webp"
    },
  ];
  
  return (
    <div>
      <NavBar />
      <div className="container border p-4 mt-4" style={{background: "linear-gradient(135deg,rgb(166, 194, 183),rgb(92, 153, 170))"}}>
        <div className="row">
          {fitnessMetrics.map(fitnessMetrics => (
            <div className="col-md-6 mb-4" key={fitnessMetrics.id}>
              <Card fitnessMetrics={fitnessMetrics}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
