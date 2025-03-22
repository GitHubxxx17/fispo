import { baseUrl } from "@runtime/util";
import React, { forwardRef } from "react";
import { EXTERNAL_URL_RE } from "shared/constants";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { src = "/", children, ...rest } = props;
  const isExternal = EXTERNAL_URL_RE.test(src);
  const withBaseUrl = isExternal ? src : baseUrl(src);

  return (
    <img ref={ref} src={withBaseUrl} {...rest}>
      {children}
    </img>
  );
});

Image.displayName = "Image";

export default Image;
