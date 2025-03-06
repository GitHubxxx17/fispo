import { routes } from "virtual:routes";
import { useRoutes } from "react-router-dom";

export const Content = () => {
  console.log(routes);
  const routeElement = useRoutes(routes);
  return routeElement;
};
