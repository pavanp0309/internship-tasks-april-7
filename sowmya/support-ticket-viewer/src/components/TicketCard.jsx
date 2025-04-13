import React from 'react';

const TicketCard = (props) => {
  const {customerName,customerType,profilePic,summary,description,createdDate,priority,status} = props;

  const isPremium = customerType === 'Premium';
  const isEscalated = priority === 'High';
  const showFollowUp = status === 'Open';

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return 'lightcoral';
      case 'In Progress': return 'gold';
      case 'Closed': return 'lightgreen';
      default: return '#ccc';
    }
  };

  const initials = customerName.split(' ').map(n => n[0]).join('');

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '12px',
      margin: '8px 0',
      backgroundColor: '#f9f9f9'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {profilePic ? (
          <img src={profilePic} alt="avatar" style={{ width: 40, height: 40, borderRadius: '50%' }} />
        ) : (
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            backgroundColor: '#aaa', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>{initials}</div>
        )}

        <div style={{ marginLeft: '12px' }}>
          <strong>{customerName}</strong> ({customerType})
          {isPremium && <span style={{ marginLeft: '8px', color: 'purple' }}>⭐ Premium</span>}
        </div>
      </div>

      <div style={{ marginTop: '8px' }}>
        <p><strong>{summary}</strong></p>
        <p>{description}</p>
        <p><small>🗓 Created on: {createdDate}</small></p>
        <p>
          <span style={{
            padding: '2px 8px',
            backgroundColor: getStatusColor(status),
            borderRadius: '4px',
            marginRight: '8px'
          }}>{status}</span>
          {isEscalated && <span style={{ color: 'red' }}>🔥 Escalated</span>}
        </p>

        {showFollowUp && (
          <button style={{
            padding: '6px 12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>Follow Up</button>
        )}
      </div>
    </div>
  );
};

export default TicketCard;
