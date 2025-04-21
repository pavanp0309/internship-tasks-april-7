// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <nav style={{ width: "200px", padding: "1rem", background: "#eee" }}>
    <ul>
      <li><NavLink to="/console/projects">Projects</NavLink></li>
      <li><NavLink to="/console/billing">Billing</NavLink></li>
      <li><NavLink to="/console/activity">Activity</NavLink></li>
    </ul>
  </nav>
);

export default Sidebar;
