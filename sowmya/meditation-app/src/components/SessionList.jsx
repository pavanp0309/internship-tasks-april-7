import React from "react";
import SessionCard from "./SessionCard";

const SessionList = ({ sessions }) => {
  const categories = ["Focus", "Sleep", "Anxiety"];

  return (
    <>
      {categories.map(category => (
        <div key={category} className="mb-5">
          <h3 className="mb-3">{category}</h3>
          <div className="row">
            {sessions
              .filter(session => session.category === category)
              .map(session => (
                <div key={session.id} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex">
                    <SessionCard session={session} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SessionList;
