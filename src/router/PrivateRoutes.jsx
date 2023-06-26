import React from "react";

const Dashboard = React.lazy(() => import("@/features/dashboard/Dashboard"));

export const privateRoutes = [
  {
    path: "/",
    key: "route_" + "dashboard",
    element: <Dashboard />,
  },
];
