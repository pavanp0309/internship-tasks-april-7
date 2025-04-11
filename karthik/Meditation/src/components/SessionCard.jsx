import React from "react";

const SessionCard = ({
  name,
  duration,
  category,
  isLocked,
  isPremium,
  description,
  isNew,
  children,
}) => {
  return (
    <div className={`session-card ${isLocked ? "locked" : "unlocked"}`}>
      <div className="session-header">
        <h3>{name} {isNew && <span className="new">New 🔥</span>}</h3>
        {isLocked && <span className="lock">🔒</span>}
        {isPremium && <span className="premium">Premium</span>}
      </div>
      <p className="category">Category: {category}</p>
      <p className="duration">Duration: {duration} mins</p>
      {!isLocked && <div className="timer-preview">🕒 Preview Timer</div>}
      {description && <p className="description">{description}</p>}
      <div className="cta">
        {isLocked ? (
          <button className="unlock-btn">Unlock Now</button>
        ) : (
          <button className="start-btn">Start Session</button>
        )}
      </div>
      {children}
    </div>
  );
};

SessionCard.defaultProps = {
  description: null,
};

export default SessionCard;
