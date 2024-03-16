import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/Home";
import WorkFlowPage from "./pages/WorkFlowPage";

import { Auth0Provider } from "@auth0/auth0-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    element: <h2 className="text-2xl">Error 404 - Page Not Found</h2>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-383elx6sz8425dpl.us.auth0.com"
    clientId="p9Y3doLOjGE5oUN6kCgxAwPwhzWpwgj7"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
