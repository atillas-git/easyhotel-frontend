import { Suspense, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes } from "./PrivateRoutes";
import { publicRoutes } from "./PublicRoutes";
import Loading from "./components/Loading";
import HLayout from "@/components/HLayout/HLayout";
import PropTypes from 'prop-types';

const AppRouter = ({isAuthorized,user}) => {
  
  const routes = useMemo(() => {
    if ((user && isAuthorized) || (user && !isAuthorized)) {
      return privateRoutes;
    }
    return publicRoutes;
  }, [isAuthorized,user]);

  if (isAuthorized) {
    return (
      <HLayout>
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes.map((route) => {
              return (
                <Route key={route.key} path={route.path} element={route.element} />
              );
            })}
          </Routes>
        </Suspense>
      </HLayout>
    );
  } else {
    return (
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.key}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Routes>
      </Suspense>
    );
  }
};
AppRouter.propTypes={
  isAuthorized:PropTypes.bool.isRequired,
  user:PropTypes.object
}
export default AppRouter;
