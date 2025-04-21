import { useParams, useNavigate } from 'react-router-dom';
import dummyyApplications from '../data/dummyyApplications';

const ApplicationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const application = dummyyApplications.find(app => app.id === parseInt(id));

  if (!application) {
    return <p className="text-danger text-center mt-5">Application not found</p>;
  }

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-4" onClick={() => navigate(-1)}>
        ⬅️ Back
      </button>
      <div className="card shadow p-4">
        <h3>{application.name}'s Application</h3>
        <hr />
        <p><strong>Loan Amount:</strong> {application.loanAmount}</p>
        <p><strong>Status:</strong> {application.status}</p>
        <p><strong>Submitted At:</strong> {application.submittedAt}</p>
      </div>
    </div>
  );
};

export default ApplicationDetail;
