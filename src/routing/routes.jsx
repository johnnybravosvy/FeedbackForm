import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/navbar", element: <Navbar /> },
]);

export default router;
