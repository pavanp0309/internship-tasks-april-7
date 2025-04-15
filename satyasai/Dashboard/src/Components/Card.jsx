import React from 'react';

const Card = ({ teamTasks }) => {
  const { name, yesterdayTask, todayTask, blockers } = teamTasks;

  return (
    <div className="card p-4 mx-3 my-3" style={{ width: '250px', height: '300px' }}>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{name}</h5>
        <p><strong>Yesterday:</strong> {yesterdayTask}</p>
        <p><strong>Today:</strong> {todayTask}</p>
        {blockers ? (
          <p className="text-danger"><strong>Blockers:</strong> {blockers}</p>
        ) : (
          <p className="text-success"><strong>No Blockers 🚀</strong></p>
        )}
        {blockers 
            ? <p className="border border-danger p-2 text-danger">Blockers ❗</p>
            : <p className="text-success">All clear ✅</p>
        }
      </div>
    </div>
  );
};

export default Card;
