import React from "react";
import { orders } from "../data/orders";
import OrderCard from "./OrderCard";

const OrderList = () => {
  return (
    <div className="order-list">
      {orders.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
