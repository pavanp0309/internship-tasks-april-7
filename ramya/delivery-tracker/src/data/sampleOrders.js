const orders = [
    {
      id: 'ORD001',
      customerName: 'Ramya',
      items: ['Margherita Pizza', 'Coke'],
      address: 'kphb colony,hyderabad',
      paymentStatus: 'Paid',
      status: 'Shipped',
      deliveryInstructions: 'Call on arrival',
      deliveryPartner: 'Amit',
      eta: '25 mins',
    },
    {
      id: 'ORD002',
      customerName: 'joe',
      items: ['Veg Burger', 'Fries'],
      address: 'kakinda,ap',
      paymentStatus: 'COD',
      status: 'Out for Delivery',
      eta: '30 mins',
      deliveryPartner: 'Rajesh',
    },
    {
      id: 'ORD003',
      customerName: 'Bhavani',
      items: ['Pasta', 'Brownie'],
      address: 'karimnagar',
      paymentStatus: 'Failed',
      status: 'Placed',
    },
  ];
  
  export default orders;
  