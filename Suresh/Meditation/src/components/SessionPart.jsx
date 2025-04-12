import React from "react";
import TimeCard from "./TimeCard";
import './SessionPart.css';


const SessionPart = ({ title, sessions }) => {
  return (
    <div className="session-section">
      <h4 className="section-title  shadow">{title}</h4>
      <div className="row gx-4 gy-4">
        {sessions.map((session, i) => (
          <div className="col-md-6" key={i}>
            <TimeCard session={session} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionPart;