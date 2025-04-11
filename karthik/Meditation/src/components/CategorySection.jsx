import React, { useState } from "react";
import SessionCard from "./SessionCard";

const CategorySection = ({ title, sessions }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="category-section">
      <h2 onClick={() => setIsOpen(!isOpen)} className="category-title">
        {title} {isOpen ? "▲" : "▼"}
      </h2>
      {isOpen && (
        <div className="session-list">
          {sessions.map((session, index) => (
            <SessionCard
              key={session.name}
              {...session}
              isNew={index >= sessions.length - 3}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySection;
