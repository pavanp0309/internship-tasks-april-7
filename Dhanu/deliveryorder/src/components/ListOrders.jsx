import React from 'react';
import OrderCard from './OrderCard';
import orderdetails from '../data/data';

const ListOrders = () => {
  return (
    <div className="container ">
      <h2 className="text-center mb-4 py-4 fw-bold">📦 Delivery Order Tracker</h2>
      
      <div className="row g-4">
        {orderdetails.map((orderdetails, index) => (
          <div key={orderdetails.orderId || index} className="col-12 col-md-6 col-lg-6">
            <OrderCard orderdetails={orderdetails} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOrders;
