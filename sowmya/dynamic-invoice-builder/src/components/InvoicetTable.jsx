import React from 'react';

const InvoiceTable = ({ items, onChange, onAdd, onDelete, submitted }) => {
  return (
    <>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Description</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Amount</th>
            {!submitted && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>
                <input
                  className="form-control"
                  type="text"
                  value={item.description}
                  onChange={(e) => onChange(i, 'description', e.target.value)}
                  disabled={submitted}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  type="number"
                  value={item.quantity}
                  onChange={(e) => onChange(i, 'quantity', e.target.value)}
                  disabled={submitted}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  type="number"
                  value={item.price}
                  onChange={(e) => onChange(i, 'price', e.target.value)}
                  disabled={submitted}
                />
              </td>
              <td>${item.amount}</td>
              {!submitted && (
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => onDelete(i)}>Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {!submitted && (
        <button className="btn btn-primary mb-3" onClick={onAdd}>+ Add Item</button>
      )}
    </>
  );
};

export default InvoiceTable;
