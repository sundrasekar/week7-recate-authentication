import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        DG <span>Interns Hub</span>
      </Link>

      <div className="nav-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/jobs"
          className={location.pathname === "/jobs" ? "active" : ""}
        >
          Jobs
        </Link>

        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
        </Link>
      </div>

      <Link to="/jobs" className="navbar-btn">
        Find Internship
      </Link>
    </nav>
  );
}

export default Navbar;