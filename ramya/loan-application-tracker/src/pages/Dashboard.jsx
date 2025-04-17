import { Outlet, NavLink, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <Sidebar /> {/* Render the Sidebar here */}
      <div className="main-content">
        <header>
          <button onClick={handleLogout}>Logout</button>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
