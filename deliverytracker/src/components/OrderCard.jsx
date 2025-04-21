import React from "react";
import StatusTracker from "./StatusTracker";

const OrderCard = ({ order }) => {
  const statusIcons = {
    Paid: "✅",
    COD: "💰",
    Failed: "❌"
  };

  const getActions = (status) => {
    switch (status) {
      case "Placed":
        return <button>Assign Delivery</button>;
      case "Shipped":
        return <button>Track Shipment</button>;
      case "Out for Delivery":
        return <button>Call Partner</button>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="card">
        <h3>Order ID: {order.id}</h3>
        <p>Customer: {order.customerName}</p>
        <p>Address: {order.address}</p>
        <p>Payment: <span>{statusIcons[order.paymentStatus]} {order.paymentStatus}</span></p>

        <div className="items">
          {order.items?.map((item, index) => (
            <div key={index}>
              <img
                src={item.icon}
                alt={item.name}
                width="40"
                height="40"
                style={{ marginRight: "8px", verticalAlign: "middle", borderRadius: "6px" }}
              />
              {item.name}
            </div>
          ))}
        </div>

        {order.deliveryPartner && <p>Delivery Partner: {order.deliveryPartner}</p>}
        {order.eta && order.deliveryStatus !== "Delivered" && (
          <p>ETA: {order.eta}</p>
        )}
        {order.deliveryInstructions && <p>Note: {order.deliveryInstructions}</p>}

        <StatusTracker status={order.deliveryStatus} />
        {getActions(order.deliveryStatus)}
      </div>
    </>
  );
};

export default OrderCard;
