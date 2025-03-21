import { routes } from "virtual:routes";
import { useRoutes } from "react-router-dom";
import { baseUrl } from "./util";
import { memo, useMemo } from "react";

const Content = () => {
  const handleRoutes = useMemo(() => {
    return routes.map((route) => {
      return { ...route, path: baseUrl(route.path) };
    });
  }, [routes]);
  const routeElement = useRoutes(handleRoutes);
  return routeElement;
};
export default memo(Content);
