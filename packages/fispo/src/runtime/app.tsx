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

  // 处理文章frontmatter数据
  const articlesList = {};
  // 标签
  const tags = {};
  // 分类
  const categories = {};
  for await (const route of routes) {
    const moduleInfo = await route.preload();
    articlesList[route.path] = moduleInfo.frontmatter;
    moduleInfo.frontmatter.tags.forEach((tag) => {
      if (tags[tag]) {
        tags[tag].push(route.path);
      } else {
        tags[tag] = [route.path];
      }
    });
    const category = moduleInfo.frontmatter.categories;
    if (category) {
      if (categories[category]) {
        categories[category].push(route.path);
      } else {
        categories[category] = [route.path];
      }
    }
  }

  // 封装页面数据
  const getPageData = (
    pageType: PageData["pageType"],
    frontmatter: PageData["frontmatter"],
    title: string
  ): PageData => {
    return {
      pageType,
      siteData,
      frontmatter,
      pagePath: routePath,
      title,
      articlesList,
      tags,
      categories,
    };
  };

  // 导航栏页面
  if (isNavPath) {
    console.log(routes, siteData);
    const customTitle = siteData.themeConfig.navMenus.find(
      (item) => item.path == routePath
    ).title;

    return getPageData(
      routePath === "/" ? "home" : "custom",
      {},
      routePath === "/" ? siteData.title : customTitle
    );
  }

  // 文章：获取路由组件编译后的模块内容
  const matched = matchRoutes(routes, routePath);
  if (matched) {
    const moduleInfo = await matched[0].route.preload();
    console.log(moduleInfo);
    return getPageData(
      "article",
      moduleInfo.frontmatter,
      moduleInfo.frontmatter.title || ""
    );
  }
  return getPageData("404", {}, "404");
}

export function App() {
  return <Layout />;
}
