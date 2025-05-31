import React from "react";
import SessionSection from "./components/SessionSection";


const sessions = [
  {
    name: "Morning Focus",
    category: "Focus",
    duration: "10 min",
    isLocked: false,
    isPremium: false,
    description: "Boost your focus for the day.",
    image: "/focus.jpg",
  },
  {
    name: "Deep Sleep",
    category: "Sleep",
    duration: "20 min",
    isLocked: true,
    isPremium: true,
    description: "Helps you fall into a deep sleep.",
    image: "/sleep.jpg",
  },
  {
    name: "Calm Anxiety",
    category: "Anxiety",
    duration: "15 min",
    isLocked: false,
    isPremium: true,
    description: "Relax your mind and body.",
    image: "/anxiety.jpg",
  },
  {
    name: "Midday Reset",
    category: "Focus",
    duration: "12 min",
    isLocked: false,
    isPremium: false,
    description: "Recharge and reset.",
    image: "/mid.jpg",
  },
  {
    name: "Evening Wind Down",
    category: "Sleep",
    duration: "18 min",
    isLocked: true,
    isPremium: false,
    description: "Improve your mind",
    image: "/tri.jpg",
  },
];


// Tag last 3 as "New"
sessions.slice(-3).forEach((s) => (s.isNew = true));

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <h2 className="main-title">🧘 Meditation Sessions</h2>
        <h5 className="main-title-1 text-center fst-italic">🌞<span>The Mind Reset</span> </h5>
        {["Focus", "Sleep", "Anxiety"].map((category) => (
          <SessionSection
            key={category}
            title={category}
            sessions={sessions.filter((s) => s.category === category)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
