import React from "react";
import StandupCard from "./components/StandupCard";

const teamMembers = [
  {
    name: "Alice",
    team: "Frontend",
    yesterday: "Fixed header bug",
    today: "Refactor navbar component",
    blockers: "API not returning expected data",
    updatedAt: "10 mins ago",
    colorClass: "text-dark",
    backgroundImage: "/frontend.png",
  },
  {
    name: "Bob",
    team: "Backend",
    yesterday: "Implemented auth middleware",
    today: "Optimize DB queries",
    blockers: "",
    updatedAt: "15 mins ago",
    colorClass: "text-dark",
    backgroundImage: "/backend.png",
  },
  {
    name: "Clara",
    team: "QA",
    yesterday: "Tested registration flow",
    today: "Write regression cases",
    blockers: "Waiting for staging build",
    updatedAt: "5 mins ago",
    colorClass: "text-dark",
    backgroundImage: "/qa.png",
  },
];

const App = () => {
  return (
    <div className="container py-4">
      {/*  Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-white">📝 Daily Standup Board</h1>
        <h5 className="text-white">Inspired by Agile Tools like Jira & Trello</h5>
        <p className="mt-3 text-white">
          Quickly glance through your team’s daily updates. See what they worked on yesterday,
          what’s on their plate today, and if anything is blocking their progress.
        </p>
        <hr />
      </div>

      {/* Cards Grid */}
      <div className="row g-4">
        {teamMembers.map((member, i) => (
          <div className="col-md-6 col-lg-4" key={i}>
            <StandupCard {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
