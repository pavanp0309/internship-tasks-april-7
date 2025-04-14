import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const orders = [
  {
    id: 'ORD123',
    customerName: 'Rahul Sharma',
    items: ['Paneer Tikka', 'Butter Naan', 'Gulab Jamun'],
    deliveryAddress: '123 MG Road, Bangalore',
    paymentStatus: 'Paid',
    status: 'Out for Delivery',
    deliveryPartner: 'Amit Kumar',
    eta: '20 mins',
    deliveryInstructions: 'Leave at the door',
  },
  {
    id: 'ORD124',
    customerName: 'Neha Verma',
    items: ['Veg Biryani', 'Raita'],
    deliveryAddress: '456 JP Nagar, Bangalore',
    paymentStatus: 'COD',
    status: 'Shipped',
    eta: '35 mins',
  },
  {
    id: 'ORD125',
    customerName: 'Suresh Raina',
    items: ['Pizza', 'Garlic Bread'],
    deliveryAddress: '789 Indiranagar, Bangalore',
    paymentStatus: 'Failed',
    status: 'Placed',
  },
  {
    id: 'ORD126',
    customerName: 'Priya Das',
    items: ['Sushi', 'Miso Soup'],
    deliveryAddress: '101 Whitefield, Bangalore',
    paymentStatus: 'Paid',
    status: 'Delivered',
    deliveryPartner: 'Kiran Nair',
  }
];

const paymentBadge = (status) => {
  switch (status) {
    case 'Paid':
      return <span className="badge bg-success">Paid ✅</span>;
    case 'COD':
      return <span className="badge bg-warning text-dark">COD 💰</span>;
    case 'Failed':
      return <span className="badge bg-danger">Failed ❌</span>;
    default:
      return null;
  }
};

const statusSteps = ['Placed', 'Shipped', 'Out for Delivery', 'Delivered'];

const StatusTracker = ({ currentStatus }) => {
  return (
    <div className="d-flex gap-2 mb-2 flex-wrap">
      {statusSteps.map((step, idx) => {
        const isCompleted = statusSteps.indexOf(currentStatus) >= idx;
        return (
          <span
            key={step}
            className={`badge px-3 py-2 ${
              isCompleted ? 'bg-primary' : 'bg-secondary'
            }`}
          >
            {step}
          </span>
        );
      })}
    </div>
  );
};

const OrderCard = ({ order }) => {
  return (
    <div className="card mb-4 shadow-sm border-0">
      <div className="card-body">
        <h5 className="card-title">Order #{order.id}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Customer: {order.customerName}
        </h6>
        <p className="mb-1"><strong>Address:</strong> {order.deliveryAddress}</p>
        <p className="mb-1"><strong>Items:</strong></p>
        <ul className="list-group list-group-flush mb-2">
          {order.items.map((item, idx) => (
            <li className="list-group-item d-flex align-items-center" key={idx}>
              <span role="img" aria-label="food" className="me-2">🍽️</span> {item}
            </li>
          ))}
        </ul>
        <div className="mb-2">
          {paymentBadge(order.paymentStatus)}
        </div>
        <StatusTracker currentStatus={order.status} />
        {order?.deliveryPartner && (
          <p className="mb-1"><strong>Partner:</strong> {order.deliveryPartner}</p>
        )}
        {order.status !== 'Delivered' && order?.eta && (
          <p className="text-info"><strong>ETA:</strong> {order.eta}</p>
        )}
        {order?.deliveryInstructions && (
          <p className="text-muted fst-italic">Instructions: {order.deliveryInstructions}</p>
        )}
        <div className="mt-3">
          {order.status === 'Placed' && <button className="btn btn-sm btn-outline-primary">Start Shipping</button>}
          {order.status === 'Shipped' && <button className="btn btn-sm btn-outline-warning">Out for Delivery</button>}
          {order.status === 'Out for Delivery' && <button className="btn btn-sm btn-outline-success">Mark as Delivered</button>}
          {order.status === 'Delivered' && <span className="badge bg-success">Completed</span>}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4">📦 Delivery Order Tracker</h2>
      {orders.map(order => (
        <OrderCard order={order} key={order.id} />
      ))}
    </div>
  );
};

export default App;
