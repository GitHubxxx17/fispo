import { matchRoutes } from "react-router-dom";
import { Layout } from "../theme-default";
import { routes } from "fispo:routes";
import { PageData } from "shared/types";
import siteData from "fispo:site-data";

export async function initPageData(routePath: string): Promise<PageData> {
  console.log("跳转:", routePath);

  //  判断是否为nav的路径
  const isNavPath = siteData?.themeConfig?.navMenus.find((item) => {
    return item.path === routePath;
  });

  if (isNavPath) {
    // 处理文章frontmatter数据
    for await (const route of routes) {
      const moduleInfo = await route.preload();
      siteData.articleList[route.path] = moduleInfo.frontmatter;
    }
    console.log(routes, siteData);
    return {
      pageType: routePath === "/" ? "home" : "custom",
      siteData,
      frontmatter: {},
      pagePath: routePath,
    };
  }
  // 获取路由组件编译后的模块内容
  const matched = matchRoutes(routes, routePath);

  if (matched) {
    // Preload route component
    const moduleInfo = await matched[0].route.preload();
    console.log(moduleInfo);
    return {
      pageType: "article",
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
