export const orders = [
    {
      id: "ORD101",
      customerName: "Alice",
      items: [
        { name: "Pizza", icon: "/src/assets/pizza.jpg" },
        { name: "Coke", icon: "/src/assets/coke.jpg" }
      ],
      address: "123 MG Road, Mumbai",
      paymentStatus: "Paid",
      deliveryStatus: "Out for Delivery",
      deliveryInstructions: "Leave at door",
      deliveryPartner: "Ravi",
      eta: "30 mins"
    },
    {
      id: "ORD102",
      customerName: "Bob",
      items: [
        { name: "Burger", icon: "/src/assets/burger.jpg" },
        { name: "Fries", icon: "/src/assets/fries.jpg" }
      ],
      address: "22 Baker Street, Delhi",
      paymentStatus: "COD",
      deliveryStatus: "Shipped"
    },
    {
      id: "ORD103",
      customerName: "Chloe",
      items: [
        { name: "Biryani", icon: "/src/assets/biryani.jpg" }
      ],
      address: "7 Park Ave, Hyderabad",
      paymentStatus: "Failed",
      deliveryStatus: "Placed"
    }
  ];
  