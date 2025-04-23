import React from 'react';
 
 const SummaryPanel = ({ total }) => {
   return (
     <div className="border p-3 mb-3">
       <h6 className="mb-2">Summary</h6>
       <p>Subtotal: ${total}</p>
       <p>Tax: $0.00</p>
       <p className="fw-bold">Total: ${total}</p>
     </div>
   );
 };
 
 export default SummaryPanel;