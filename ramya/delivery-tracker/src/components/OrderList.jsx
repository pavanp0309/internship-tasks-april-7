import OrderCard from "./OrderCard";

const orders = [
  {
    id: "ORD123",
    customerName: "Alice",
    items: ["Pizza", "Coke", "Garlic Bread"],
    address: "123 Main St",
    paymentStatus: "Paid",
    status: "Out for Delivery",
    deliveryPartner: "John",
    deliveryInstructions: "Ring the bell twice",
    eta: "20 mins",
  },
  {
    id: "ORD124",
    customerName: "Bob",
    items: ["Burger", "Fries"],
    address: "456 Park Ave",
    paymentStatus: "COD",
    status: "Shipped",
  },
];

function OrderList() {
  return (
    <div className="grid gap-4">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}

export default OrderList;
