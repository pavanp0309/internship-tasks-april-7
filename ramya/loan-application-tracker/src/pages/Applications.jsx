import dummyApplications from "../data/dummyApplications";
import { Link } from "react-router-dom";


const Applications = () => {
  return (
    <div className="applications-container">
      {dummyApplications.map((app) => (
        <div key={app.id} className="application-card">
          <h3>{app.name}</h3>
          <p><strong>Loan Type:</strong> {app.loanType}</p>
          <p><strong>Amount:</strong> ${app.amount}</p>
          <p><strong>Status:</strong> {app.status}</p>
          <p><strong>Submitted:</strong> {app.submittedDate}</p>
          <Link to={`/dashboard/applications/${app.id}`} className="view-details">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Applications;
