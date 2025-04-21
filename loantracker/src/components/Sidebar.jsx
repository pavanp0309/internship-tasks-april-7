// src/components/Sidebar.jsx
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../auth";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <nav>
        <h2 className="logo">Admin</h2>
        <NavLink to="/dashboard/applications">Applications</NavLink>
        <NavLink to="/dashboard/settings">Settings</NavLink>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </aside>
  );
};

export default Sidebar;
