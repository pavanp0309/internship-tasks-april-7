// Card.jsx
import React from "react";

const statusColors = {
  Open: "primary",
  "In Progress": "warning",
  Closed: "success"
};

const getInitials = (name) => {
  const initials = name.split(" ").map((n) => n[0]).join("");
  return initials.toUpperCase();
};

const Card = ({ ticket }) => {
  const {
    id,
    customer: { name, type, avatar },
    summary,
    description,
    createdAt,
    priority,
    status
  } = ticket;

  const badgeColor = statusColors[status] || "secondary";
  const isPremium = type === "Premium";
  const isEscalated = priority === "High";

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">{summary}</h5>
          <span className={`badge bg-${badgeColor}`}>{status}</span>
        </div>

        {/* Description */}
        <p className="card-text">{description}</p>

        {/* Customer Info */}
        <div className="d-flex align-items-center mb-3">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="rounded-circle me-2"
              width="40"
              height="40"
            />
          ) : (
            <div
              className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-2"
              style={{ width: 40, height: 40 }}
            >
              {getInitials(name)}
            </div>
          )}

          <div>
            <strong>{name}</strong>{" "}
            {isPremium && <span className="badge bg-info text-dark ms-1">Premium</span>}
          </div>
        </div>

        {/* Metadata */}
        <p className="mb-1"><strong>Ticket ID:</strong> {id}</p>
        <p className="mb-1"><strong>Created:</strong> {createdAt}</p>
        <p className="mb-1">
          <strong>Priority:</strong> {priority}{" "}
          {isEscalated && (
            <span className="badge bg-danger ms-2">Escalated 🚨</span>
          )}
        </p>

        {/* Follow Up Button */}
        {status === "Open" && (
          <button className="btn btn-outline-primary mt-2">Follow Up</button>
        )}
      </div>
    </div>
  );
};

export default Card;
