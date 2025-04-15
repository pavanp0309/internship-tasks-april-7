
import React from 'react';
import orders from './data/sampleOrders';
import OrderCard from './components/OrderCard';

const App = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center text-danger mb-4">🍕 Delivery Order Tracker</h1>
      <div className="row g-4">
        {orders.map((order) => (
          <div className="col-md-6 col-lg-4" key={order.id}>
            <OrderCard order={order} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
