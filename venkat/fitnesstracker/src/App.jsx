import React from 'react'
import Card from './components/Card'
import NavBar from './components/Navbar'
import BaseComponent from 'bootstrap/js/dist/base-component';



const App = () => {
  const fitnessMetrics = [
    {
      id: 1,
      title: "Steps",
      emoji: "🚶‍♂️",
      goal: 10000,
      achieved: 15000,
      image:"./src/assets/steps.jpg"
    
    },
    {
      id: 2,
      title: "Heart Rate",
      emoji: "💗",
      goal: 110,
      achieved: 90,
      image:"./src/assets/heart.jpg"
    },
    {
      id: 3,
      title: "Calories",
      emoji: "🔥",
      goal: 600,
      achieved: 540,
      image:"./src/assets/calories.jpg"
    },
    {
      id: 4,
      title: "Workouts",
      emoji: "⏱️",
      goal: 60, 
      achieved: 65,
      image:"./src/assets/workout.jpg"
    },
  ];
  
  return (
    <div>
      <NavBar />
      <div className="container border p-4 mt-4" style={{background: "linear-gradient(135deg,rgb(232, 85, 237),rgb(21, 230, 195))"}}>
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

