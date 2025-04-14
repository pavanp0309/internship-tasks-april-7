import React from 'react';
import PaymentBadge from './ProgressBadge';
import ProgressTracker from './ProgressTracker';

const OrderCard = ({ order }) => {
  const {
    id,
    customerName,
    items,
    address,
    paymentStatus,
    status,
    deliveryPartner,
    deliveryInstructions,
    eta,
  } = order;

  const getItemIcon = (item) => {
    const lower = item.toLowerCase();
    if (lower.includes('pizza')) return '🍕';
    if (lower.includes('coke')) return '🥤';
    if (lower.includes('burger')) return '🍔';
    if (lower.includes('fries')) return '🍟';
    if (lower.includes('pasta')) return '🍝';
    if (lower.includes('brownie')) return '🍫';
    return '🍽️';
  };

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title">Order #{id}</h5>
          <PaymentBadge status={paymentStatus} />
        </div>
        <p><strong>👤 Customer:</strong> {customerName}</p>
        <p><strong>📍 Address:</strong> {address}</p>
        {deliveryPartner && <p><strong>🛵 Partner:</strong> {deliveryPartner}</p>}
        {deliveryInstructions && <p><strong>📢 Instructions:</strong> {deliveryInstructions}</p>}
        <div className="mb-2">
          <strong>🍽️ Items:</strong>
          <ul className="ms-3">
            {items.map((item, index) => (
              <li key={index}>{getItemIcon(item)} {item}</li>
            ))}
          </ul>
        </div>
        {status !== 'Delivered' && eta && (
          <p className="text-muted"><em>⏳ ETA: {eta}</em></p>
        )}
        <ProgressTracker currentStatus={status} />
      </div>
    </div>
  );
};

export default OrderCard;
