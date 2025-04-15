import React from 'react'
import Card from './components/Card.';

const App = () => {
   const sessions = [
    {
      name: "Morning Mindfulness",
      category: "Focus",
      duration: "10 min",
      isLocked: false,
      isPremium: false,
      image:"https://t3.ftcdn.net/jpg/06/57/36/26/360_F_657362691_kxgFscScUcOzSY5mwxODSF4aARiJwCI2.jpg"
    },
    {
      name: "Deep Sleep Journey",
      category: "Sleep",
      duration: "15 min",
      isLocked: true,
      isPremium: true,
      image:"https://source.boomplaymusic.com/group10/M00/07/11/8488687442984fc193b1a77962d18858_320_320.jpg"
    },
    {
      name: "Breathe & Relax",
      category: "Anxiety",
      duration: "8 min",
      isLocked: false,
      isPremium: false,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkDjZ0VBfsGhuuvo0T43U0iuQu_aNpBW2p3Q&s"
    },
    {
      name: "Power Focus Boost",
      category: "Focus",
      duration: "12 min",
      isLocked: true,
      isPremium: true,
      image:"https://scitechdaily.com/images/Neuroscience-Brain-Stimulation-Concept.jpg"
    },
    {
      name: "Calm Nights",
      category: "Sleep",
      duration: "20 min",
      isLocked: false,
      isPremium: true,
      image:"https://images.stockcake.com/public/a/b/4/ab42143a-e5bc-4558-8698-3959405d1f55_medium/midnight-yoga-pose-stockcake.jpg"
    },
    {
      name: "Anxiety Release",
      category: "Anxiety",
      duration: "10 min",
      isLocked: true,
      isPremium: false,
      image:"https://cdn.tinybuddha.com/wp-content/uploads/2013/09/Calm-man.png"
    },
    {
      name: "Evening Clarity",
      category: "Focus",
      duration: "7 min",
      isLocked: false,
      isPremium: false,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs6CeUGMmR25G-q2EIFTWIU7tb2_0PUuTkcxRjs_Hs65TK1lV9BPl1xJDtqrpUzF5trv4&usqp=CAU"
    },
    {
      name: "Soothing Rain Sounds",
      category: "Sleep",
      duration: "25 min",
      isLocked: true,
      isPremium: true,
      image:"https://i.ytimg.com/vi/1gzQGg86K_w/hq720.jpg?v=67bccd85&sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBje4EKjaBAn3Sv8ckcdTJPYGR0mg"
    },
    {
      name: "Worry Detox",
      category: "Anxiety",
      duration: "9 min",
      isLocked: false,
      isPremium: true,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUl3zyC1_0-5BO11VeaQYhE3JLgFB8cJE_ww&s"
      
    }
  ];
  
  return (
    <div className='container text-center'>
    <h1><b>Meditation Sessions</b></h1>
  <div className="min-vh-100 py-5" style={{ background: 'linear-gradient(135deg,rgb(125, 146, 195), #80deea)' }}>
    <div className="row justify-content-center gap-4 px-3">
      {sessions.map((sessions) => (
        <div className="col-md-3 col-sm-6 d-flex" key={sessions.id}>
          <Card sessions={sessions} />
        </div>
      ))}
    </div>
  </div>
    </div>
  )
}

export default App
