import React, { useState } from "react";
import html2pdf from "html2pdf.js"; // Import the library

const InvoiceBuilder = () => {
  const [items, setItems] = useState([
    { description: "", quantity: 0, price: 0, discount: 0, amount: 0 },
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = field === "description" ? value : Number(value);

    const { quantity, price, discount } = newItems[index];
    let baseAmount = quantity * price;
    let discountedAmount = baseAmount - (baseAmount * (discount || 0)) / 100;

    newItems[index].amount = discountedAmount;
    setItems(newItems);
  };

  const handleAddItem = () => {
    setItems([
      ...items,
      { description: "", quantity: 0, price: 0, discount: 0, amount: 0 },
    ]);
  };

  const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const getTotal = () => {
    return items.reduce((acc, item) => acc + item.amount, 0);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setCurrentPage(3);
  };

  // PDF Download Function
  const downloadPDF = () => {
    const invoice = document.getElementById("invoice-preview");
    const options = {
      margin: 0.5,
      filename: `invoice-${orderId || "download"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(options).from(invoice).save();
  };

  return (
    <div className="invoice-bg min-vh-100 d-flex align-items-start justify-content-center py-5 px-3">
      <div className="card shadow-lg invoice-card animate-fade p-4 w-100" style={{ maxWidth: "1000px" }}>
        {currentPage === 1 && !submitted && (
          <div className="text-center mb-4">
            <h2 className="fw-bold">Get Started with Your Invoice</h2>
            <p>Fill in the details below to generate your invoice.</p>
            <div className="mb-3">
              <label htmlFor="orderId" className="form-label">Order ID</label>
              <input
                type="text"
                id="orderId"
                className="form-control"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="customerName" className="form-label">Customer Name</label>
              <input
                type="text"
                id="customerName"
                className="form-control"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="customerAddress" className="form-label">Customer Address</label>
              <textarea
                id="customerAddress"
                className="form-control"
                rows="3"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
              />
            </div>
            <button className="btn btn-success mt-3" onClick={() => setCurrentPage(2)}>
              ENTER
            </button>
          </div>
        )}

        {currentPage === 2 && !submitted && (
          <div>
            <h2 className="text-center mb-4 text-dark fw-bold">🧾 Add Items</h2>
            <div className="table-responsive">
              <table className="table table-bordered align-middle text-center">
                <thead className="table-light">
                  <tr>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Discount (%)</th>
                    <th>Amount</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={item.description}
                          onChange={(e) =>
                            handleChange(index, "description", e.target.value)
                          }
                        />
                      </td>
                      {["quantity", "price", "discount"].map((field) => (
                        <td key={field}>
                          <input
                            type="number"
                            className="form-control"
                            value={item[field]}
                            onChange={(e) =>
                              handleChange(index, field, e.target.value)
                            }
                          />
                        </td>
                      ))}
                      <td>${item.amount.toFixed(2)}</td>
                      <td>
                        <button
                          className="btn-b btn-sm btn-danger btn-hover"
                          onClick={() => handleDeleteItem(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="btn btn-primary mb-3 btn-hover" onClick={handleAddItem}>
              + Add Item
            </button>
            <h5 className="text-end text-dark fw-semibold">
              Total: ${getTotal().toFixed(2)}
            </h5>
            <button className="btn btn-success mt-3" onClick={handleSubmit}>
              Submit Invoice
            </button>
          </div>
        )}

        {currentPage === 3 && submitted && (
          <div id="invoice-preview">
            <h2 className="text-center mb-4 text-dark fw-bold">🧾 Invoice</h2>
            <p><strong>Order ID:</strong> {orderId}</p>
            <p><strong>Customer Name:</strong> {customerName}</p>
            <p><strong>Customer Address:</strong> {customerAddress}</p>
            <table className="table table-bordered align-middle text-center">
              <thead className="table-light">
                <tr>
                  <th>Description</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Discount (%)</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.description}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.discount}%</td>
                    <td>${item.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h5 className="text-end text-dark fw-semibold">
              Total: ${getTotal().toFixed(2)}
            </h5>
            <button className="btn btn-secondary mt-3 no-print" onClick={downloadPDF}>
              Download PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvoiceBuilder;

