import { routes } from "virtual:routes";
import { memo } from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "shared/components/CodeBlock";
import Icon from "shared/components/Icon";
import Image from "shared/components/Image";
import Link from "shared/components/Link";
import { removeTrailingSlash } from "./util";

export interface ContentProps {
  components?: {
    [key: string]: (props: any) => JSX.Element;
  };
  path: string;
}

const Content = (props: ContentProps) => {
  const { components, path } = props;
  const routeElement = routes.find((r) => {
    return removeTrailingSlash(r.path) === path;
  })?.element;
  return (
    <MDXProvider components={{ Icon, Image, Link, CodeBlock, ...components }}>
      {routeElement}
    </MDXProvider>
  );
};
export default memo(Content);
