import React from 'react';
import './Card.css';

const Card = ({ ticket }) => {
  const {
    ticketId,
    customerName,
    customerType,
    issueSummary,
    issueDescription,
    createdDate,
    priority,
    status,
    profilePic,
  } = ticket;

  const color = status === "Open"
  ? "green"
  : status === "In Progress"
  ? "orange"
  : "red"; 

  const initials = customerName.split(' ').map(n => n[0]).join('').toUpperCase();

return (
    <div className="card shadow h-100">
        <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="card-title text-uppercase">{ticketId}</h5>
                {customerType && (
                    <span className="badge bg-warning text-dark">Premium</span>
                )}
            </div>
            <div className="d-flex align-items-center mb-2">
                {profilePic ? (
                    <img
                        src={profilePic}
                        alt="Avatar"
                        className="rounded-circle me-2"
                        style={{ width: '40px', height: '40px' }}
                    />
                ) : (
                    <div
                        className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-2"
                        style={{ width: '40px', height: '40px' }}
                    >
                        {initials}
                    </div>
                )}
                <p className="mb-0">
                    <strong>{customerName}</strong>
                </p>
            </div>
            <p className="card-text">
                <strong>Summary:</strong> {issueSummary}
            </p>
            <p className="card-text">
                <strong>Description:</strong> {issueDescription}
            </p>
            <p className="card-text">
                <strong>Date:</strong> {createdDate}
            </p>
            <p className="card-text">
                <strong>Priority:</strong> {priority}
                {priority === 'High' && (
                    <span className="ms-2 badge bg-danger">Escalated</span>
                )}
            </p>
            <p className="card-text">
                <strong>Status:</strong>{' '}
                <span style={{ color, fontWeight: 'bold' }}>{status}</span>
            </p>
            {status === 'Open' && (
                <button className="btn btn-sm btn-primary text-uppercase">
                    Follow Up
                </button>
            )}
        </div>
    </div>
);
};

export default Card;