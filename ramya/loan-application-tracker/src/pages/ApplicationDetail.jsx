import { useParams, useNavigate } from "react-router-dom";
import dummyApplications from "../data/dummyApplications";


const ApplicationDetail = () => {
  const { id } = useParams(); // Get the 'id' from URL
  const navigate = useNavigate();
  
  // Find the application that matches the 'id' from dummyApplications
  const application = dummyApplications.find((app) => app.id === id);

  // Show fallback if no matching application is found
  if (!application) {
    return (
      <div className="not-found">
        <h2>Application not found!</h2>
        <button onClick={() => navigate("/dashboard/applications")}>Back to Applications</button>
      </div>
    );
  }

  return (
    <div className="application-detail">
      <h2>Application Details</h2>
      <p><strong>ID:</strong> {application.id}</p>
      <p><strong>Name:</strong> {application.name}</p>
      <p><strong>Loan Type:</strong> {application.loanType}</p>
      <p><strong>Amount:</strong> ${application.amount}</p>
      <p><strong>Status:</strong> {application.status}</p>
      <p><strong>Submitted Date:</strong> {application.submittedDate}</p>
      
      {/* Example of Optional Chaining for missing fields */}
      <p><strong>Additional Notes:</strong> {application.notes?.toString() || "No additional notes"}</p>
      
      <button onClick={() => navigate("/dashboard/applications")}>Back to Applications</button>
    </div>
  );
};

export default ApplicationDetail;
