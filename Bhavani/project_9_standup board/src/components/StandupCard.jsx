import React from "react";

const StandupCard = ({
  name,
  team,
  yesterday,
  today,
  blockers,
  updatedAt,
  colorClass,
  backgroundImage,
}) => {
  return (
    <div
      className={`card h-100 text-shadow-sm position-relative overflow-hidden ${colorClass}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px",
        borderRadius: "16px",
      }}
    >
      <div
        className="card-body d-flex flex-column justify-content-between"
        style={{
          backdropFilter: "blur(6px)",
          background: "rgba(0, 0, 0, 0.4)",
          height: "100%",
          borderRadius: "16px",
        }}
      >
        <div>
          <h5 className="card-title fw-bold">{name} <small className="text-light">({team})</small></h5>
          <p className="mb-1"><strong>✅ Yesterday:</strong> {yesterday}</p>
          <p className="mb-1"><strong>📌 Today:</strong> {today}</p>
          {blockers ? (
            <p className="mb-1 text-danger"><strong>🚫 Blockers:</strong> {blockers}</p>
          ) : (
            <p className="mb-1 text-success"><strong>✅ All clear</strong></p>
          )}
        </div>
        <div className="mt-3">
          <small className="text-light">Last updated: {updatedAt}</small>
        </div>
      </div>
    </div>
  );
};

export default StandupCard;
