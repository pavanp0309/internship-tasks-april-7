// Card.jsx
import React from "react";

const Card = ({ name, yesterday, today, blockers }) => {
  const hasBlockers = blockers && blockers.trim().length > 0;

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><strong>Yesterday:</strong> {yesterday}</p>
        <p className="card-text"><strong>Today:</strong> {today}</p>

        {hasBlockers ? (
          <div className="alert alert-danger mt-3 p-2">
            <strong>Blockers ❗</strong>: {blockers}
          </div>
        ) : (
          <div className="alert alert-success mt-3 p-2">
            <strong>All clear ✅</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export const LayoutBox = ({ children, title, avg }) => (
  <div className="mb-5">
    <h3 className="mb-1">{title} Team</h3>
    <p className="text-muted mb-3">Average tasks per member: {avg.toFixed(1)}</p>
    <div>{children}</div>
  </div>
);

export default Card;
