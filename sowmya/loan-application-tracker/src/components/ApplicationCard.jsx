import { useNavigate } from "react-router-dom";

const ApplicationCard = ({ app }) => {
  const navigate = useNavigate();

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h3>{app.name}</h3>
      <p>Loan Amount: {app.loanAmount}</p>
      <p>Status: {app.status}</p>
      <p>Submitted At: {app.submittedAt}</p>
      <button onClick={() => navigate(`/dashboard/applications/${app.id}`)}>
        View Details
      </button>
    </div>
  );
};

export default ApplicationCard;
