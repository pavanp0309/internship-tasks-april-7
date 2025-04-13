const orderdetails = [
    {
      orderId: "ORD45312",
      customerName: "Rahul",
      items: [
        { name: "Chicken Mughalai Biryani", icon: "🫕", quantity:1,cost:250 },
        { name: "Coke", icon: "🥤",quantity:1,cost:50 }
      ],
      deliveryAddress: "Challa Vaari Street,Kadiam",
      paymentStatus: "Paid", 
      deliveryStatus: "Out for Delivery", 
      deliveryPartner: "Siddardha",
      eta: "20 mins",
      deliveryInstructions: "Ring the bell once"
    },
    {
      orderId: "ORD46123",
      customerName: "Varun",
      items: [
        { name: "Veg Biryani", icon: "🍛",quantity:1,cost:180 },
        { name: "Lassi", icon: "🥤",quantity:1,cost:20 }
      ],
      deliveryAddress: "Jubliee Hills, Hyderabad",
      paymentStatus: "COD",
      deliveryPartner:"Sai Siva",
      deliveryStatus: "Shipped",
      eta: "35 mins"
    },
    {
      orderId: "ORD34712",
      customerName: "Rey Amit",
      items: [
        { name: "Chicken Kabaab", icon: "🍗",quantity:2,cost:160 },
        { name: "Fries", icon: "🍟",quantity:1,cost:120 }
      ],
      deliveryAddress: "AVA Road, Rajamundry",
      paymentStatus: "Failed",
      deliveryStatus: "Placed"
    },
    {
      orderId: "ORD23481",
      customerName: "Priya Warrior",
      items: [
        { name: "Chicken Wings", icon: "🍗",quantity:1,cost:220 },
        { name: "Beer", icon: "🍺",quantity:1,cost:160}
      ],
      deliveryAddress: "22 Nehru Street, Chennai",
      paymentStatus: "Paid",
      deliveryStatus: "Delivered",
      deliveryPartner: "Manideep"
    }
  ];
  
  export default orderdetails;
  