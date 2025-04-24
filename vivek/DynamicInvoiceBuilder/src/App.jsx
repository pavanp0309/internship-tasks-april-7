import { useState } from 'react';
import HomePage from './components/HomePage';
import InvoiceForm from './components/InvoiceForm';

export default function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  return (
    <div className="app">
      {!showInvoice ? (
        <HomePage setShowInvoice={setShowInvoice} />
      ) : (
        <InvoiceForm setShowInvoice={setShowInvoice} />
      )}
    </div>
  );
}

