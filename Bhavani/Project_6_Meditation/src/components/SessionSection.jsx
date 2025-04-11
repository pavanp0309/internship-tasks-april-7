import React from "react";
import SessionCard from "./SessionCard";


const SessionSection = ({ title, sessions }) => {
  return (
    <div className="session-section">
      <h4 className="section-title  shadow">{title}</h4>
      <div className="row gx-4 gy-4">
        {sessions.map((session, i) => (
          <div className="col-md-6" key={i}>
            <SessionCard session={session} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionSection;
