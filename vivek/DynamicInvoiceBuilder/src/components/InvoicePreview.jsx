import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function InvoicePreview({ invoice }) {
  const invoiceRef = useRef();

  const calculateSubtotal = () => {
    return invoice.items.reduce(
      (sum, item) => sum + (item.quantity * item.price), 
      0
    );
  };

  const calculateTax = () => {
    return calculateSubtotal() * (invoice.taxRate / 100);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handleDownloadPdf = () => {
    const input = invoiceRef.current;
    const downloadBtn = input.querySelector('.download-btn');
    
    // Hide the button before capturing
    downloadBtn.style.display = 'none';

    html2canvas(input, {
      scale: 2,
      logging: false,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`invoice_${invoice.invoiceNumber || 'new'}.pdf`);
      
      // Show the button again after PDF generation
      downloadBtn.style.display = 'block';
    }).catch(error => {
      console.error('Error generating PDF:', error);
      downloadBtn.style.display = 'block'; // Ensure button is restored on error
    });
  };

  return (
    <div className="invoice-preview" ref={invoiceRef}>
      <div className="invoice-header">
        <h2>INVOICE</h2>
        <div className="invoice-meta">
          <div><strong>Invoice #:</strong> {invoice.invoiceNumber || 'N/A'}</div>
          <div><strong>Date:</strong> {invoice.date}</div>
        </div>
      </div>

      <div className="invoice-parties">
        <div className="from">
          <h3>From:</h3>
          <p>Your Company Name</p>
          <p>123 Business Street</p>
          <p>City, State 12345</p>
        </div>

        <div className="to">
          <h3>To:</h3>
          <p>{invoice.customerName || 'Customer Name'}</p>
          <p>{invoice.companyName || 'Company Name'}</p>
          <p>{invoice.address || 'Address'}</p>
          <p>Email: {invoice.email || 'N/A'}</p>
          <p>Phone: {invoice.phone || 'N/A'}</p>
        </div>
      </div>

      <table className="invoice-items">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, index) => (
            <tr key={index}>
              <td>{item.name || 'Item'}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="invoice-totals">
        <div className="total-row">
          <span>Subtotal:</span>
          <span>${calculateSubtotal().toFixed(2)}</span>
        </div>
        <div className="total-row">
          <span>Tax ({invoice.taxRate}%):</span>
          <span>${calculateTax().toFixed(2)}</span>
        </div>
        <div className="total-row grand-total">
          <span>Total:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
      </div>

      {invoice.notes && (
        <div className="invoice-notes">
          <h4>Notes</h4>
          <p>{invoice.notes}</p>
        </div>
      )}

      <button className="download-btn" onClick={handleDownloadPdf}>
        Download PDF
      </button>
    </div>
  );
}