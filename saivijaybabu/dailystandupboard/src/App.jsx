// App.jsx
import React from "react";
import teamData from "./data/data";
import Card,{LayoutBox} from "./components/Card";


const App = () => {
  return (
    <div className="container py-4">
      <h1 className="mb-4">Daily Stand-up Board</h1>
      {Object.entries(teamData).map(([team, members]) => {
        const totalTasks = members.reduce((sum, m) => sum + (m.yesterday ? 1 : 0) + (m.today ? 1 : 0), 0);
        const avgTasks = totalTasks / members.length;

        return (
          <LayoutBox key={team} title={team} avg={avgTasks}>
            {members.map((member, index) => (
              <Card key={index} {...member} />
            ))}
          </LayoutBox>
        );
      })}
    </div>
  );
};

export default App;
