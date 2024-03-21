import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/Home";
import WorkFlowPage from "./pages/WorkFlowPage";
import SignUpForm from "./components/SignUpForm/SignUpForm";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import RegistrationFrm from "./components/RegistrationFrm/RegistrationFrm";
import { UserProvider } from "./contexts/userContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
  {
    path: "/dashboard",
    element: <UserDashboard />,
  },
  {
    path: "/workflow",
    element: <WorkFlowPage />,
  },
  {
    path: "/register",
    element: <RegistrationFrm />,
  },
  {
    path: "*",
    element: <h2 className="text-2xl">Error 404 - Page Not Found</h2>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </UserProvider>
  </React.StrictMode>
);
