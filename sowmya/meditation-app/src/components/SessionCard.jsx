import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const SessionCard = ({ session }) => (
    <div
    className="w-100 h-100 p-4 mb-4 rounded border border-secondary"
    style={{
        backgroundColor: "rgb(246, 202, 187) ",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}
  >
  
    <div >
      <h4 className="mb-2">
        {session.name}
        {session.isNew && (
          <span className="ms-2 badge bg-danger" style={{ color: "#fff" }}>🔥 New</span>
        )}
      </h4>

      <p className="mb-1"><strong>Category:</strong> {session.category}</p>
      <p className="mb-1"><strong>Duration:</strong> {session.duration}</p>
      <p className="mb-1">
        <strong>Status:</strong> {session.isLocked ? "🔒 Locked" : "✅ Unlocked"}
      </p>
      <p className="mb-1">
        <strong>Premium:</strong> {session.isPremium ? "🌟 Yes" : "Free"}
      </p>

      {session.description && (
        <p className="mt-3 mb-3">
          <strong>Description:</strong> {session.description}
        </p>
      )}
    </div>

    <div className="mt-auto">
      {session.isLocked ? (
        <button className="btn btn-outline-warning fs-6 btn-sm text-dark">🔒 Unlock Now</button>
      ) : (
        <button className="btn btn-success btn-sm">▶️ Start Session</button>
      )}
    </div>
  </div>
);

export default SessionCard;
