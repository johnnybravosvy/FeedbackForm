import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = ({ role }) => {
  return (
    <>
      <Navbar role={role} />
      <div id="main">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
