import { useParams } from "react-router-dom";
import dummyApplications from "../data/dummyApplication";

const ApplicationDetail = () => {
  const { id } = useParams();
  const app = dummyApplications.find((a) => a.id === id);

  if (!app) return <p>Application not found.</p>;

  return (
    <div>
      <h2>Application Details</h2>
      <p><strong>ID:</strong> {app?.id}</p>
      <p><strong>Name:</strong> {app?.name}</p>
      <p><strong>Loan Type:</strong> {app?.loanType}</p>
      <p><strong>Amount:</strong> ${app?.amount}</p>
      <p><strong>Status:</strong> {app?.status}</p>
      <p><strong>Submitted Date:</strong> {app?.submittedDate}</p>
    </div>
  );
};

export default ApplicationDetail;
