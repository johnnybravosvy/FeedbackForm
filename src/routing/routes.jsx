import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import Register from "../components/Register";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/navbar", element: <Navbar /> },
  { path: "/Login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/register", element: <Register /> },
]);

export default router;
