import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Layout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="d-flex">
      <div
        className="bg-dark text-white d-flex flex-column position-fixed vh-100 p-3"
        style={{ width: "220px" }}
      >
        <h4 className="text-center mb-4">Loan Admin</h4>
        <nav className="nav flex-column">
          <NavLink to="/dashboard/applications" className="nav-link text-white mb-2">
            📄 Applications
          </NavLink>
          <NavLink to="/dashboard/settings" className="nav-link text-white mb-2">
            ⚙️ Settings
          </NavLink>
        </nav>
        <div className="mt-auto">
          <button className="btn btn-danger w-100" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </div>

      <div style={{ marginLeft: "220px", padding: "2rem", width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
