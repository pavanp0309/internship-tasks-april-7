import React from 'react';
import { orders } from './data/data';
import OrderCard from './components/OrderCard';
import '/node_modules/bootstrap/dist/css/bootstrap.css';

const App = () => {
  const statuses = ['Delivered', 'Shipped', 'Out for Delivery'];

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">📦 Delivery Order Tracker</h1>

      {statuses.map((status) => {
        const filteredOrders = orders.filter(order => order.deliveryStatus === status);
        if (filteredOrders.length === 0) return null;

        return (
          <div key={status} className="mb-5">
            <h3 className="text-capitalize mb-3">{status} Orders</h3>
            <div className="row">
              {filteredOrders.map((order, index) => (
                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                  <OrderCard order={order} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
