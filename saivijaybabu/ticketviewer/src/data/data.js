// data.js
const tickets = [
  {
    id: "TCKT-1001",
    customer: { name: "John Doe", type: "Premium", avatar: "" },
    summary: "Unable to reset password",
    description: "Customer is unable to receive password reset email.",
    createdAt: "2025-04-10",
    priority: "High",
    status: "Open"
  },
  {
    id: "TCKT-1002",
    customer: { name: "Jane Smith", type: "Free", avatar: "" },
    summary: "App crashes on login",
    description: "Crash occurs when entering credentials on Android.",
    createdAt: "2025-04-11",
    priority: "Medium",
    status: "In Progress"
  },
  {
    id: "TCKT-1003",
    customer: { name: "Mark Evans", type: "Premium", avatar: "" },
    summary: "Request for invoice",
    description: "Customer requested invoice for Q1.",
    createdAt: "2025-04-09",
    priority: "Low",
    status: "Closed"
  },
  {
    id: "TCKT-1004",
    customer: { name: "Sara Connor", type: "Free", avatar: "" },
    summary: "Billing issue",
    description: "Incorrect charge on the monthly bill.",
    createdAt: "2025-04-12",
    priority: "High",
    status: "Open"
  }
];

export default tickets;
