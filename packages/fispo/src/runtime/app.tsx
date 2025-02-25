import { matchRoutes } from "react-router-dom";
import { Layout } from "../theme-default";
import { routes } from "fispo:routes";
import { PageData } from "shared/types";
import siteData from "fispo:site-data";

export async function initPageData(routePath: string): Promise<PageData> {
  if (routePath === "/") {
    return {
      pageType: "home",
      siteData,
      frontmatter: {},
      pagePath: routePath,
    };
  }
  console.log(routePath);
  // 获取路由组件编译后的模块内容
  const matched = matchRoutes(routes, routePath);

  if (matched) {
    // Preload route component
    const moduleInfo = await matched[0].route.preload();
    console.log(moduleInfo);
    return {
      pageType: moduleInfo?.frontmatter?.pageType || "home",
      siteData,
      frontmatter: moduleInfo.frontmatter,
      pagePath: routePath,
    };
  }
  return {
    pageType: "404",
    siteData,
    pagePath: routePath,
    frontmatter: {},
  };
}

export function App() {
  return <Layout />;
}
