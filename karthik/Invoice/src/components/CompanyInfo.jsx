import React from 'react';
 
 const CompanyInfo = ({ companyInfo, onChange, submitted }) => {
   return (
     <form>
       <div className="row">
         <div className="col-sm-6 mb-2">
           <label className="form-label">Client Name</label>
           <input
             type="text"
             className="form-control form-control-sm"
             value={companyInfo.client}
             onChange={(e) => onChange('client', e.target.value)}
             disabled={submitted}
             placeholder="Enter client name"
           />
         </div>
         <div className="col-sm-6 mb-2">
           <label className="form-label">Client Address</label>
           <input
             type="text"
             className="form-control form-control-sm"
             value={companyInfo.clientAddress}
             onChange={(e) => onChange('clientAddress', e.target.value)}
             disabled={submitted}
             placeholder="Enter address"
           />
         </div>
       </div>
     </form>
   );
 };
 
 export default CompanyInfo;