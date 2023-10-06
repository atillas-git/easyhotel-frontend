import React from "react";
import { Navigate } from "react-router-dom";

const Auth = React.lazy(() => import("@/features/auth/Auth"));

export const publicRoutes = [
  {
    path: "/login",
    key: "route_" + "login",
    element: <Auth />,
  },
  {
    path: "*",
    key: "route_" + "other",
    element: <Navigate to={"/login"}  replace = {true}/>,
  },
];
