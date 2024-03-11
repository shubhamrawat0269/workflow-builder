import React from "react";
import ReactDOM from "react-dom/client";

import "./css/button.css";
import "./css/extra.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import WorkFlowPage from "./pages/WorkFlowPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/workflow",
    element: <WorkFlowPage />,
  },
  {
    path: "*",
    element: <h2>Error 404 - Page Not Found</h2>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
