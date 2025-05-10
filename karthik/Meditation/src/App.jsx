import React from "react";
import { sessions } from "./data/sessions";
import CategorySection from "./components/CategorySection";
import "./components/styles.css";

const App = () => {
  const categories = ["Focus", "Sleep", "Anxiety"];

  return (
    <div className="app-container">
      <h1>Meditation Sessions 🧘‍♀️</h1>
      {categories.map((category) => (
        <CategorySection
          key={category}
          title={category}
          sessions={sessions.filter((s) => s.category === category)}
        />
      ))}
    </div>
  );
};

export default App;
