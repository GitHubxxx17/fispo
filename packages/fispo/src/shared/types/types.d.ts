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

declare module "fispo:preloader" {
  const Preloader: React.ElementType;
  export default Preloader;
}

declare module "fispo:globalComponents" {
  interface GlobalComponents {
    element: React.ReactElement;
    data: any;
  }
  export const globalComponents: GlobalComponents[];
}
