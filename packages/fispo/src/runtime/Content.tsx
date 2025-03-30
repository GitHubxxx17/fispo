import { routes } from "virtual:routes";
import { useRoutes } from "react-router-dom";
import { baseUrl } from "./util";
import { memo, useMemo } from "react";
import { MDXProvider } from "@mdx-js/react";
import CopyButton from "shared/components/CopyButton";

export interface ContentProps {
  components?: {
    [key: string]: (props: any) => JSX.Element;
  };
}

const Content = (props: ContentProps) => {
  const { components } = props;
  const handleRoutes = useMemo(() => {
    return routes.map((route) => {
      return { ...route, path: baseUrl(route.path) };
    });
  }, [routes]);
  const routeElement = useRoutes(handleRoutes);
  return (
    <MDXProvider components={{ CopyButton, ...components }}>
      {routeElement}
    </MDXProvider>
  );
};
export default memo(Content);
