import { baseUrl } from "@runtime/util";
import React, { forwardRef } from "react";
import { EXTERNAL_URL_RE } from "shared/constants";
import { Link as ReactLink } from "react-router-dom";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { href = "/", children, ...rest } = props;
  const isExternal = EXTERNAL_URL_RE.test(href);
  const withBaseUrl = isExternal ? href : baseUrl(href);
  if (isExternal) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <ReactLink ref={ref} to={withBaseUrl} {...rest}>
      {children}
    </ReactLink>
  );
});

Link.displayName = "Link";

export default Link;
