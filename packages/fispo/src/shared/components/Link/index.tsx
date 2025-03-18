import { baseUrl } from "@runtime/util";
import React, { forwardRef } from "react";
import { EXTERNAL_URL_RE } from "shared/constants";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { href = "/", children, target, rel, ...rest } = props;
  const isExternal = EXTERNAL_URL_RE.test(href);
  const innerTarget = isExternal ? "_blank" : target;
  const innerRel = isExternal ? "noopener noreferrer" : rel;
  const withBaseUrl = isExternal ? href : baseUrl(href);

  return (
    <a
      ref={ref}
      href={withBaseUrl}
      target={innerTarget}
      rel={innerRel}
      {...rest}
    >
      {children}
    </a>
  );
});

Link.displayName = "Link";

export default Link;
