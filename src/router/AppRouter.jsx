import { useAppStore } from "@/hooks/useAppStore";
import { Suspense, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes } from "./PrivateRoutes";
import { publicRoutes } from "./PublicRoutes";
import Loading from "./components/Loading";

const AppRouter = () => {
  const { user } = useAppStore();
  const routes = useMemo(() => {
    if (user) {
      return privateRoutes;
    }
    return publicRoutes;
  }, [user]);
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routes.map((route) => {
          return (
            <Route key={route.key} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;