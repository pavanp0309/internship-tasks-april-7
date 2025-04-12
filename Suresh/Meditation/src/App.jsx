import React from "react";
import SessionPart from "./components/SessionPart";
import { sessions } from "./components/Data";
import "./App.css";



sessions.slice(-3).forEach((s) => (s.isNew = true));

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <h2 className="main-title">🧘‍♂️ Meditation Sessions</h2>
        <h5 className="main-title-1 text-center fst-italic">🌞<span>Let's Be Fit with Meditation</span> </h5>
        {["Focus", "Sleep", "Anxiety"].map((category) => (
          <SessionPart
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