import { useState } from 'react';
import InvoicePreview from './InvoicePreview';

export default function InvoiceForm({ setShowInvoice }) {
  const [invoice, setInvoice] = useState({
    customerName: '',
    companyName: '',
    email: '',
    phone: '',
    address: '',
    invoiceNumber: '',
    date: new Date().toISOString().split('T')[0],
    items: [{ name: '', quantity: 1, price: 0 }],
    taxRate: 10,
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoice(prev => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const newItems = [...invoice.items];
    newItems[index] = {
      ...newItems[index],
      [name]: name === 'name' ? value : Number(value)
    };
    setInvoice(prev => ({ ...prev, items: newItems }));
  };

  const addItem = () => {
    setInvoice(prev => ({
      ...prev,
      items: [...prev.items, { name: '', quantity: 1, price: 0 }]
    }));
  };

  const removeItem = (index) => {
    const newItems = invoice.items.filter((_, i) => i !== index);
    setInvoice(prev => ({ ...prev, items: newItems }));
  };

  return (
    <div className="invoice-page">
      <button className="back-btn" onClick={() => setShowInvoice(false)}>
        ← Back to Home
      </button>
      
      <div className="invoice-container">
        <div className="form-section">
          <h2>Invoice Details</h2>
          
          <div className="form-group">
            <label>Customer Name</label>
            <input
              type="text"
              name="customerName"
              value={invoice.customerName}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={invoice.companyName}
              onChange={handleChange}
              placeholder="ABC Corp"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={invoice.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={invoice.phone}
                onChange={handleChange}
                placeholder="+1 234 567 890"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              value={invoice.address}
              onChange={handleChange}
              rows="3"
              placeholder="123 Main St, City, Country"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Invoice Number</label>
              <input
                type="text"
                name="invoiceNumber"
                value={invoice.invoiceNumber}
                onChange={handleChange}
                placeholder="INV-0001"
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={invoice.date}
                onChange={handleChange}
              />
            </div>
          </div>

          <h3>Items</h3>
          {invoice.items.map((item, index) => (
            <div key={index} className="item-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={item.name}
                  onChange={(e) => handleItemChange(index, e)}
                  placeholder="Product name"
                />
              </div>
              <div className="form-group small">
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, e)}
                  placeholder="Qty"
                />
              </div>
              <div className="form-group small">
                <input
                  type="number"
                  name="price"
                  min="0"
                  step="0.01"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, e)}
                  placeholder="Price"
                />
              </div>
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeItem(index)}
              >
                ×
              </button>
            </div>
          ))}

          <button type="button" className="add-btn" onClick={addItem}>
            + Add Item
          </button>

          <div className="form-row">
            <div className="form-group">
              <label>Tax Rate (%)</label>
              <input
                type="number"
                name="taxRate"
                min="0"
                max="100"
                value={invoice.taxRate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Notes</label>
            <textarea
              name="notes"
              value={invoice.notes}
              onChange={handleChange}
              rows="3"
              placeholder="Additional notes..."
            />
          </div>
        </div>

        <div className="preview-section">
          <InvoicePreview invoice={invoice} />
        </div>
      </div>
    </div>
  );
}