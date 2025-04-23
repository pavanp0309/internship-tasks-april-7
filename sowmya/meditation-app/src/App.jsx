import React from "react";
import SessionList from "./components/SessionList";
import { sessions } from "./data/data";

const App = () => (
  <div style={{
    minHeight: "100vh",
    padding: "20px",
    background: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)"
  }}>
    <h1 className="text-center mb-4">🧘‍♂️ Meditation Sessions</h1>
    <SessionList sessions={sessions} />
  </div>
);

export default App;
