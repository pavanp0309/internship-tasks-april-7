import React from "react";
import Orders from "./components/Orders";
import orderdata from "./components/data/Data";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="main-title">Order Tracker</h1>
      <div className="orders-list">
        {orderdata.map((order) => (
          <Orders key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default App;