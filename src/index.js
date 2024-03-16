import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/Home";
import WorkFlowPage from "./pages/WorkFlowPage";
import SignUpForm from "./components/SignUpForm/SignUpForm";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    path: "/workflow",
    element: <WorkFlowPage />,
  },
  {
    path: "*",
    element: <h2 className="text-2xl">Error 404 - Page Not Found</h2>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
