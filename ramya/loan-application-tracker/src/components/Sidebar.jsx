import { NavLink } from "react-router-dom";


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="applications" activeClassName="active">
              Applications
            </NavLink>
          </li>
          <li>
            <NavLink to="settings" activeClassName="active">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
