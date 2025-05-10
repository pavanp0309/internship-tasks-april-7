import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const teamData = {
  "🍕 Pizza Team": [
    {
      name: "Sai",
      yesterday: "Kneaded dough",
      today: "Spread tomato sauce",
      blockers: "",
    },
    {
      name: "Bhanu",
      yesterday: "Added toppings",
      today: "Bake in oven",
      blockers: "Ran out of mozzarella",
    },
    {
      name: "Ravi",
      yesterday: "Rolled maki",
      today: "Plate for presentation",
      blockers: "",
    },
  ],
  "🍣 Sushi Team": [
    {
      name: "Vinay",
      yesterday: "Prepared rice",
      today: "Slice salmon",
      blockers: "",
    },
    {
      name: "Arjun",
      yesterday: "Rolled maki",
      today: "Plate for presentation",
      blockers: "",
    },
    {
      name: "Rahul",
      yesterday: "Cut cucumber",
      today: "Serve with wasabi",
      blockers: "Missing soy sauce",
    },
  ],
  "🍩 Donut Team": [
    {
      name: "Pirya",
      yesterday: "Made batter",
      today: "Fry the rings",
      blockers: "",
    },
    {
      name: "Honey",
      yesterday: "Glazed donuts",
      today: "Add toppings",
      blockers: "Sprinkle machine jammed",
    },
    {
      name: "sandeep",
      yesterday: "Rolled maki",
      today: "Plate for presentation",
      blockers: "",
    },
  ],
};

const cardColors = ["primary", "success", "warning", "info", "secondary"];

function App() {
  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">🍽️ Daily Kitchen Standup Board</h1>

      {Object.entries(teamData).map(([team, members]) => {
        const avgTasks = (members.length * 3 / members.length).toFixed(1);

        return (
          <div key={team} className="mb-5">
            <h2>{team}</h2>
            <p className="text-muted">📊 Avg. Tasks per Chef: {avgTasks}</p>
            <div className="row">
              {members.map((member, index) => {
                const bgColor = cardColors[index % cardColors.length];
                return (
                  <div className="col-md-4 mb-3" key={index}>
                    <div className={`card h-100 border-${bgColor} bg-${bgColor} text-white`}>
                      <div className="card-body">
                        <h5 className="card-title">👨‍🍳 {member.name}</h5>
                        <p className="card-text">
                          <strong>Yesterday:</strong> {member.yesterday}
                        </p>
                        <p className="card-text">
                          <strong>Today:</strong> {member.today}
                        </p>

                        {member.blockers ? (
                          <div className="card-text p-2 bg-white text-danger fw-bold border-start border-3 border-danger">
                            Blockers ❗ {member.blockers}
                          </div>
                        ) : (
                          <div className="card-text text-white fw-bold">
                            All Done ✅
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;