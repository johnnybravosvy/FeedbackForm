import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 flex ">
      <div className="left-navbar">
        <span>Feed</span>
      </div>
      <div className="right-navbar">
        <Link to="/">Home</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
