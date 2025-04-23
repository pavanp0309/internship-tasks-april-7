import React from 'react';

const PrintPreview = ({ items, total }) => {
  const printInvoice = () => {
    window.print();
  };

  return (
    <button className="btn btn-secondary w-100 mt-2" onClick={printInvoice}>Download</button>
  );
};

export default PrintPreview;
