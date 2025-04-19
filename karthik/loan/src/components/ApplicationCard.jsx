import React from 'react';
 import { Link } from 'react-router-dom';
 
 function ApplicationCard(props) {
   const { id, name, loanAmount, status, submittedAt } = props;
 
   const getStatusVariant = () => {
     switch (status) {
       case 'Approved': return 'success';
       case 'Rejected': return 'danger';
       case 'Pending': return 'warning';
       default: return 'secondary';
     }
   };
 
   return (
     <div className="card shadow-sm mb-3">
       <div className="card-body">
         <h5 className="card-title d-flex justify-content-between">
           {name}
           <span className={`badge bg-${getStatusVariant()}`}>{status}</span>
         </h5>
         <p className="card-text">
           <strong>Loan Amount:</strong> {loanAmount} <br />
           <strong>Submitted:</strong> {submittedAt}
         </p>
         <Link to={`/dashboard/applications/${id}`} className="btn btn-outline-primary btn-sm">
           <i className="bi bi-eye"></i> View Details
         </Link>
       </div>
     </div>
   );
 }
 
 export default ApplicationCard;