// App.jsx
import React, { Component, Fragment } from "react";
import sessions from "./data/data";
import Card from "./components/Card";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: {}
    };
  }

  toggleCategory = (category) => {
    this.setState((prevState) => ({
      expanded: {
        ...prevState.expanded,
        [category]: !prevState.expanded[category]
      }
    }));
  };

  render() {
    const categories = ["Focus", "Sleep", "Anxiety"];
    const { expanded } = this.state;
    const recentSessionIds = sessions.slice(-3).map((s) => s.id);

    return (
      <div className="container py-4">
        <h2 className="mb-4">🧘 Meditation Sessions</h2>

        {categories.map((category) => {
          const filtered = sessions.filter((s) => s.category === category);
          const isOpen = expanded[category];

          return (
            <Fragment key={category}>
              <div
                className="d-flex justify-content-between align-items-center mb-2"
                role="button"
                onClick={() => this.toggleCategory(category)}
              >
                <h4>{category}</h4>
                <i className={`bi ${isOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
              </div>

              {isOpen && (
                <div className="row">
                  {filtered.map((session) => (
                    <div className="col-md-6" key={session.id}>
                      <Card
                        {...session}
                        isNew={recentSessionIds.includes(session.id)}
                        showTimer={!session.isLocked}
                      />
                    </div>
                  ))}
                </div>
              )}
              <hr />
            </Fragment>
          );
        })}
      </div>
    );
  }
}

export default App;
