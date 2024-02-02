import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidenav">
      <div className="sidenav__profile">
        <div className="sidenav__profile-title">MS CV_Builder</div>
      </div>
      <div>
        <ul className="navList">
          <NavLink
            to="/panel/home"
            className={({ isActive }) =>
              isActive ? "navList__heading__active" : ""
            }
          >
            <li className="navList__heading">Home</li>
          </NavLink>
          <NavLink
            to="/panel/resume"
            className={({ isActive }) =>
              isActive ? "navList__heading__active" : ""
            }
          >
            <li className="navList__heading">Your Resume</li>
          </NavLink>
          <NavLink
            to="/panel/editor"
            className={({ isActive }) =>
              isActive ? "navList__heading__active" : ""
            }
          >
            <li className="navList__heading">Create Resume</li>
          </NavLink>
          <NavLink
            to="/panel/plans"
            className={({ isActive }) =>
              isActive ? "navList__heading__active" : ""
            }
          >
            <li className="navList__heading">Pricing</li>
          </NavLink>
          <NavLink
            to="/panel/help"
            className={({ isActive }) =>
              isActive ? "navList__heading__active" : ""
            }
          ></NavLink>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
