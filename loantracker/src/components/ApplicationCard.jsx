const ApplicationCard = ({ application, onViewDetails }) => {
    return (
      <div className="app-card">
        <h4>{application.name}</h4>
        <p><strong>Type:</strong> {application.loanType}</p>
        <p><strong>Amount:</strong> ₹{application.amount}</p>
        <p><strong>Status:</strong> {application.status}</p>
        <p><strong>Submitted:</strong> {application.submittedDate}</p>
        <button onClick={() => onViewDetails(application.id)}>View Details</button>
      </div>
    );
  };
  
  export default ApplicationCard;
  