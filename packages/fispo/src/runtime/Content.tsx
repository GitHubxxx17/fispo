import { routes } from "virtual:routes";
import { useRoutes } from "react-router-dom";

export const Content = () => {
  const routeElement = useRoutes(routes);
  return routeElement;
};
