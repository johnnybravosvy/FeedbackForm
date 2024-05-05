import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/navbar", element: <Navbar /> },
  { path: "/Login", element: <Login /> },
]);

export default router;
