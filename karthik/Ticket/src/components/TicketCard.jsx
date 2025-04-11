import React from "react";
import "./TicketCard.css";

const TicketCard = ({
  id,
  customerName,
  customerType,
  issue,
  description,
  createdDate,
  priority,
  status,
  profilePic,
}) => {
  const isPremium = customerType === "Premium";
  const isEscalated = priority === "High";
  const isOpen = status === "Open";

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "green";
      case "In Progress":
        return "orange";
      case "Closed":
        return "gray";
      default:
        return "black";
    }
  };

  const initials = customerName
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="ticket-card">
      <div className="avatar">
        {profilePic ? (
          <img src={profilePic} alt={customerName} />
        ) : (
          <div className="initials">{initials}</div>
        )}
      </div>
      <div className="content">
        <div className="header">
          <strong>#{id}</strong> - {issue}
          {isPremium && <span className="badge premium">Premium</span>}
          {isEscalated && <span className="badge escalated">Escalated 🔥</span>}
        </div>
        <p>{description}</p>
        <div className="meta">
          <span>Date: {createdDate}</span>
          <span>Priority: {priority}</span>
          <span className={`status ${getStatusColor(status)}`}>{status}</span>
        </div>
        {isOpen && <button className="follow-btn">Follow Up</button>}
      </div>
    </div>
  );
};

export default TicketCard;
