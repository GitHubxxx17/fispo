import { aplayerPluginOptions } from "./index";
import React from "react";
import "./player.css";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "meting-js": object;
    }
  }
}

const MetingPlayer = (props: aplayerPluginOptions) => {
  const { fixed, ...rest } = props;
  const innerFixed = fixed ?? true;

  return <meting-js fixed={innerFixed} {...rest}></meting-js>;
};

export default MetingPlayer;
