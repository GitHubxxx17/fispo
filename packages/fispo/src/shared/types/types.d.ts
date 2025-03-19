/// <reference types="vite/client" />

declare module "fispo:site-data" {
  import type { UserConfig } from "shared/types";
  const siteData: UserConfig;
  export default siteData;
}

declare module "virtual:routes" {
  import type { Route } from "shared/types";
  export const routes: Route[];
}

declare module "fispo:theme" {
  const ThemeLayout: React.ElementType;
  export default ThemeLayout;
}
