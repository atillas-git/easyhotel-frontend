import React from "react";

const Auth = React.lazy(() => import("@/features/auth/Auth"));

export const publicRoutes = [
  {
    path: "/",
    key: "route_" + "login",
    element: <Auth />,
  },
];
