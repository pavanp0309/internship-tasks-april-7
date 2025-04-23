import React from "react";

const PaymentBadge = ({ status }) => {
  let badgeClass = "";
  let label = "";

  if (status === "Paid") {
    badgeClass = "success";
    label = "✅ Paid";
  } else if (status === "COD") {
    badgeClass = "warning";
    label = "💰 COD";
  } else if (status === "Failed") {
    badgeClass = "danger";
    label = "❌ Failed";
  }

  return (
    <p>
      <strong>Payment:</strong> <span className={`badge bg-${badgeClass}`}>{label}</span>
    </p>
  );
};

export default PaymentBadge;
