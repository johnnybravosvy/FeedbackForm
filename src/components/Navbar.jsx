import { Link } from "react-router-dom";

const Navbar = ({ role }) => {
  return (
    <nav className="navbar bg-slate-800 text-white p-3 ">
      <div className="left-navbar navbar-brand">
        <span>Feed</span>
      </div>
      <div className="right-navbar ">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        {role === "admin" && (
          <>
            <Link to="/feedback" className="navbar-link">
              Feedback
            </Link>
            <Link to="/register" className="navbar-link">
              Register
            </Link>

            <Link to="/dashboard" className="navbar-link">
              Dashboard
            </Link>
          </>
        )}
        {role === "" ? (
          <>
            <Link to="/Login" className="navbar-link">
              Login
            </Link>
            <Link to="/register" className="navbar-link">
              Register
            </Link>{" "}
          </>
        ) : (
          <Link to="/logout" className="navbar-link">
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
