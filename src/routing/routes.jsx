import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import Register from "../components/Register";
import AddFeedback from "../components/AddFeedback";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import Logout from "../components/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  { path: "/navbar", element: <Navbar /> },
  { path: "/Login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/register", element: <Register /> },
  { path: "/addfeedback", element: <AddFeedback /> },
  { path: "/logout", element: <Logout setRole={setRole} /> },
]);

export default router;
