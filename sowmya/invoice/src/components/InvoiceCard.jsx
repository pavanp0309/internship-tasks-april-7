import React from "react";

const InvoiceCard = (props) => {
  const {invoiceNumber,clientName,amount,dueDate,status,items,currencySymbol,children,} = props;

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const isOverdue = status === "Overdue";
  const isPaid = status === "Paid";

  const cardBorderClass = isOverdue
    ? "border-danger": isPaid? "border-success": "";

  return (
    <div className={`card h-100 ${cardBorderClass}`}>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Invoice #{invoiceNumber}</h5>
        <p><strong>Client:</strong> {clientName}</p>
        <p><strong>Due Date:</strong> {new Date(dueDate).toLocaleDateString()}</p>
        <p>
          <strong>Status:</strong>{" "}
          <span className={`badge ${status.toLowerCase()}`}>{status}</span>
        </p>

        <h6>Items ({totalItems})</h6>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} × {currencySymbol}{item.price}
            </li>
          ))}
        </ul>

        <p className="mt-auto"><strong>Total:</strong> {currencySymbol}{amount}</p>
      </div>

      <div className="card-footer text-center">
        {children}
      </div>
    </div>
  );
};

export default InvoiceCard;
