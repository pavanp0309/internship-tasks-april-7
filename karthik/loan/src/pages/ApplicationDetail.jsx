import React from 'react';
 import { useParams, useNavigate } from 'react-router-dom';
 import data from '../data/dummyApplications';
 
 function ApplicationDetail() {
   const { id } = useParams();
   const navigate = useNavigate();
   const app = data.find((a) => a.id === Number(id));
 
   if (!app) {
     return <p className="error-message">Application not found.</p>;
   }
 
   return (
     <div className="application-detail-container">
       <h3 className="text-center mb-4">Application Details</h3>
       <ul className="list-group mb-4">
         <li className="list-group-item list-group-item-custom">
           <strong>Name:</strong> {app.name}
         </li>
         <li className="list-group-item list-group-item-custom">
           <strong>Loan Amount:</strong> {app.loanAmount}
         </li>
         <li className="list-group-item list-group-item-custom">
           <strong>Status:</strong> {app.status}
         </li>
         <li className="list-group-item list-group-item-custom">
           <strong>Submitted At:</strong> {app.submittedAt}
         </li>
       </ul>
       <button
         className="btn btn-dark back-button"
         onClick={() => navigate(-1)}
       >
         <i className="bi bi-arrow-left-circle "></i> Back
       </button>
     </div>
   );
 }
 
 export default ApplicationDetail;