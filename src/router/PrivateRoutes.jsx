import React from "react";
import { Navigate } from "react-router-dom";

const Dashboard = React.lazy(() => import("@/features/dashboard/Dashboard"));
const Hr = React.lazy(() => import("@/features/employeeManagement/Hr"));

export const privateRoutes = [
  {
    path: "/",
    key: "route_" + "dashboard",
    element: <Dashboard />,
  },
  {
    path: "/hr",
    key: "route_" + "hr",
    element: <Hr />,
  },
  {
    path: "*",
    key: "route_" + "other",
    element: <Navigate to={"/"} replace={true} />,
  },
];
