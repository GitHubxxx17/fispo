import { baseUrl } from "@runtime/util";
import { useMemo } from "react";
import { useRoutes } from "react-router-dom";
import { LayoutRoutes } from "shared/types";
import { inBrowser } from "shared/utils";

interface GetLayoutRoutesProps {
  routes: LayoutRoutes;
}

const GetLayoutRoutes = (props: GetLayoutRoutesProps) => {
  const { routes } = props;
  const handleRoutes = useMemo(() => {
    return routes.map((route) => {
      return { ...route, path: inBrowser() ? baseUrl(route.path) : route.path };
    });
  }, [routes]);
  const routeElement = useRoutes(handleRoutes);
  return routeElement;
};
export default GetLayoutRoutes;
