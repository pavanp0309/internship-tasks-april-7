import React from 'react';
import Card from './Components/Card';

const App = () => {
  const teamTasks = [
    {
        id: 1,
        name: "Alice Johnson",
        team: "Frontend",
        yesterdayTask: "Login page design",
        todayTask: "Dashboard design",
        blockers: "Design",
    },
    {
      id: 2,
      name: "Bob Singh",
      team: "Frontend",
      yesterdayTask: "Fixed bugs in task manager module",
      todayTask: "Write unit tests for components",
      blockers: null, 
    },
    {
      id: 3,
      name: "Catherine Lee",
      team: "Frontend",
      yesterdayTask: "Created user onboarding flow",
      todayTask: "Connect backend to onboarding screens",
      blockers: "",
    },
    {
      id: 4,
      name: "David Kim",
      team: "Backend",
      yesterdayTask: "Reviewed merge requests",
      todayTask: "Refactor context API for state management",
      blockers: null,
    },
    {
      id: 5,
      name: "Ethan",
      team: "Backend",
      yesterdayTask: "Database schema update",
      todayTask: "Writing queries",
      blockers: "Permission issues",
    },
    {
      id: 6,
      name: "Fiona",
      team: "Backend",
      yesterdayTask: "Project planning",
      todayTask: "Sprint setup",
      blockers: null,
    },
    {
        id: 7,
        name: "George",
        team: "Design",
        yesterdayTask: "Optimize UI for mobile",
        todayTask: "Deploying to production",
        blockers: "Server",
    },
    {
      id: 8,
      name: "Hannah",
      team: "Design",
      yesterdayTask: "Created wireframes",
      todayTask: "Working on prototypes",
      blockers: "",
    },
    {
      id: 9,
      name: "Ivan",
      team: "Design",
      yesterdayTask: "Set up CI/CD",
      todayTask: "Code reviews",
      blockers: "Merge conflicts",
    },
  ];

  // Group by teams
  const groupedTeams = {
    Frontend: teamTasks.filter(task => task.team === "Frontend"),
    Backend: teamTasks.filter(task => task.team === "Backend"),
    Design: teamTasks.filter(task => task.team === "Design")
  };

  // Gradient backgrounds
  const gradients = {
    Frontend: "linear-gradient(to right, #ffecd2, #fcb69f)",
    Backend: "linear-gradient(to right, #c2e9fb, #a1c4fd)",
    Design: "linear-gradient(to right, #d4fc79, #96e6a1)"
  };

  return (
    <div className='header text-center'>
      <h1><b>DAILY STANDUP BOARD</b></h1>
    <div className="container mt-4">
      {Object.entries(groupedTeams).map(([team, members]) => (
        <div key={team} className="p-4 mb-4 rounded" style={{ background: gradients[team], border: '2px solid #333' }}>
          <h3 className="text-center mb-4">{team} Team</h3>
          <div className="row justify-content-center">
            {members.map(member => (
              <div className="col-md-4 mb-4" key={member.id}>
                <Card teamTasks={member} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default App;
