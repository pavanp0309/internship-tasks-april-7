import React from "react";
import "../styles/InvoiceCard.css";

const InvoiceCard = ({
  invoiceNumber,
  clientName,
  amount,
  dueDate,
  status,
  items,
  currencySymbol,
  children,
}) => {
  const formattedDate = new Date(dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const statusBadge = {
    Paid: "success",
    Pending: "warning",
    Overdue: "danger",
  };

  
  const cardBgClass =
    invoiceNumber === 6
      ? "invoice-6-background"
      : "custom-card-bg"; 

  return (
    <div
      className={`card shadow-sm h-100 ${cardBgClass} border-${statusBadge[status]} ${
        status === "Overdue" ? "overdue-card animate__animated animate__pulse" : ""
      }`}
    >
      <div className="card-body">
        <h6 className="card-title fw-bold">Invoice #{invoiceNumber}</h6>
        <span className={`badge bg-${statusBadge[status]} mb-2`}>{status}</span>
        <p className="mb-1"><strong>Client:</strong> {clientName}</p>
        <p className="mb-2"><strong>Amount:</strong> {currencySymbol}{amount.toFixed(2)}</p>

        <ul className="list-unstyled small">
          {items.map((item, index) => (
            <li key={index}>
              {item.name} {item.quantity} × {currencySymbol}{item.price}
            </li>
          ))}
        </ul>

        <p className="mb-1"><strong>Due Date:</strong> {formattedDate}</p>
        <p className="mb-2">Items: {items.length}</p>

        {children}
      </div>
    </div>
  );
};

export default InvoiceCard;
