import React, { useState } from "react";
import InvoiceBuilder from "./src/components/InvoiceBuilder";

const InvoiceBuilder = () => {
  const [items, setItems] = useState([
    { id: Date.now(), description: "", quantity: 1, price: 0 },
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (id, field, value) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, [field]: field === "description" ? value : Number(value) }
          : item
      )
    );
  };

  const handleAddItem = () => {
    setItems(prev => [
      ...prev,
      { id: Date.now(), description: "", quantity: 1, price: 0 },
    ]);
  };

  const handleDeleteItem = id => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const getTotal = () => {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Dynamic Invoice Builder</h2>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
            {!isSubmitted && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={item.description}
                  disabled={isSubmitted}
                  onChange={e =>
                    handleChange(item.id, "description", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={item.quantity}
                  disabled={isSubmitted}
                  onChange={e =>
                    handleChange(item.id, "quantity", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={item.price}
                  disabled={isSubmitted}
                  onChange={e => handleChange(item.id, "price", e.target.value)}
                />
              </td>
              <td>₹{(item.quantity * item.price).toFixed(2)}</td>
              {!isSubmitted && (
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {!isSubmitted && (
        <button className="btn btn-secondary mb-3" onClick={handleAddItem}>
          + Add Item
        </button>
      )}

      <h4>Grand Total: ₹{getTotal().toFixed(2)}</h4>

      {!isSubmitted ? (
        <button className="btn btn-success mt-3" onClick={handleSubmit}>
          Submit Invoice
        </button>
      ) : (
        <button className="btn btn-primary mt-3" onClick={handlePrint}>
          Print / Download Invoice
        </button>
      )}
    </div>
  );
};

export default InvoiceBuilder;
