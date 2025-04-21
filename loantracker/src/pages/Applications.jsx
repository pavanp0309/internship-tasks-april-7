import dummyApplications from "../data/dummyApplication";
import { useNavigate } from "react-router-dom";
import ApplicationCard from "../components/ApplicationCard";

const Applications = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Loan Applications</h2>
      {dummyApplications.map((app) => (
        <ApplicationCard
          key={app.id}
          application={app}
          onViewDetails={(id) => navigate(`/dashboard/applications/${id}`)}
        />
      ))}
    </div>
  );
};

export default Applications;
