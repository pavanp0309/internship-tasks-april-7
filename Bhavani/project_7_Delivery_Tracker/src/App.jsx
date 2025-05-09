import React from 'react';
import OrderCard from './pages/OrderCard';
import Navbar from './components/Navbar';

const dummyOrders = [
  {
    id: '1001',
    customerName: 'Alice Johnson',
    items: ['Pizza', 'Garlic Bread'],
    address: '12 Apple St, NY',
    paymentStatus: 'Paid',
    deliveryStatus: 'Shipped',
  },
  {
    id: '1002',
    customerName: 'Bob Smith',
    items: ['Burger', 'Fries', 'Cola'],
    address: '77 Main Ave, LA',
    paymentStatus: 'COD',
    deliveryStatus: 'Out for Delivery',
  },
  {
    id: '1003',
    customerName: 'Charlie Brown',
    items: ['Ramen', 'Gyoza'],
    address: '23 Sakura Lane, Tokyo',
    paymentStatus: 'Failed',
    deliveryStatus: 'Placed',
  },
  {
    id: '1004',
    customerName: 'Diana Prince',
    items: ['Sushi', 'Miso Soup'],
    address: '5 Island Bay, SF',
    paymentStatus: 'Paid',
    deliveryStatus: 'Delivered',
  },
];

const App = () => (
  <div>
    <Navbar />
    <div className="container mt-4">
      <div className="row">
        {dummyOrders.map(order => (
          <div key={order.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <OrderCard order={order} />
          </div>
        ))}
      </div>
    </div>
  </div>
);



export default App;

