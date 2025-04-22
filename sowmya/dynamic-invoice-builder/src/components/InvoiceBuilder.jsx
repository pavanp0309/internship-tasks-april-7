import React, { useState } from 'react';
import CompanyInfo from './CompanyInfo';
import InvoiceTable from './InvoicetTable';
import SummaryPanel from './SummaryPanel';
import PrintPreview from './PrintPreview';

const InvoiceBuilder = () => {
  const [items, setItems] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [companyInfo, setCompanyInfo] = useState({
    client: '',
    clientAddress: '',
  });

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    const qty = parseFloat(newItems[index].quantity || 0);
    const price = parseFloat(newItems[index].price || 0);
    newItems[index].amount = (qty * price).toFixed(2);
    setItems(newItems);
  };

  const handleCompanyChange = (field, value) => {
    setCompanyInfo({ ...companyInfo, [field]: value });
  };

  const addItem = () => {
    setItems([...items, { description: '', quantity: '', price: '', amount: '0.00' }]);
  };

  const deleteItem = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  const total = items.reduce((sum, item) => sum + parseFloat(item.amount || 0), 0).toFixed(2);

  return (
    <div className="container my-4">
      <h3 className="text-center mb-4">🧾 Dynamic Invoice Builder</h3>

      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">

          {/* Company Info Card */}
          <div className="card mb-3 shadow-sm">
            <div className="card-header bg-primary text-white">Client & Company Info</div>
            <div className="card-body">
              <CompanyInfo
                companyInfo={companyInfo}
                onChange={handleCompanyChange}
                submitted={submitted}
              />
            </div>
          </div>

          {/* Invoice Table Card */}
          <div className="card mb-3 shadow-sm">
            <div className="card-header bg-info text-white">Invoice Items</div>
            <div className="card-body">
              <InvoiceTable
                items={items}
                onChange={handleItemChange}
                onAdd={addItem}
                onDelete={deleteItem}
                submitted={submitted}
              />
            </div>
          </div>

          {/* Summary Card */}
          <div className="card mb-4 shadow-sm">
            <div className="card-header bg-warning text-dark">Summary</div>
            <div className="card-body">
              <SummaryPanel total={total} />

              {!submitted ? (
                <button className="btn btn-success w-100 mt-3" onClick={() => setSubmitted(true)}>
                  ✅ Submit Invoice
                </button>
              ) : (
                <div className="alert alert-success mt-3 text-center">
                  <strong>Invoice Submitted!</strong>
                  <p>You can now print or download.</p>
                  <PrintPreview />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InvoiceBuilder;
