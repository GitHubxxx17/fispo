import { matchRoutes } from "react-router-dom";
import { Layout } from "../theme-default";
import { routes } from "fispo:routes";
import { PageData } from "shared/types";
import siteData from "fispo:site-data";
import formatDateToYYYYMMDD from "../theme-default/helper/date";

function sortByDate(arr: Array<any>) {
  return arr.sort((a, b) => {
    // 将日期字符串转换为 Date 对象
    const dateA = new Date(a.date.replace(/-/g, "/"));
    const dateB = new Date(b.date.replace(/-/g, "/"));

    // 比较两个日期的时间戳
    return Number(dateB) - Number(dateA);
  });
}

export async function initPageData(routePath: string): Promise<PageData> {
  console.log("跳转:", routePath.split("/").filter(Boolean));

  const pathList = routePath.split("/").filter(Boolean);

  //  判断是否为nav的路径
  const isHomeOrCustom =
    pathList.length === 0 ||
    siteData.themeConfig.navMenus.find(
      (item) => item.path == `/${pathList[0]}`
    );

  // 处理文章frontmatter数据
  const articlesList = [];
  // 标签
  const tags = {};
  // 分类
  const categories = {};
  for await (const route of routes) {
    const moduleInfo = await route.preload();

    articlesList.push({
      ...moduleInfo.frontmatter,
      date: formatDateToYYYYMMDD(moduleInfo.frontmatter.date),
      path: route.path,
      info: moduleInfo.mdInfo,
    });
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

  sortByDate(articlesList);

  // 封装页面数据
  const getPageData = (
    pageType: PageData["pageType"],
    frontmatter: PageData["frontmatter"],
    title: string,
    toc?: PageData["toc"]
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
      toc,
    };
  };

  // 导航栏页面
  if (isHomeOrCustom) {
    console.log(routes, siteData);

    let bannerTitle = siteData.title;
    if (pathList.length == 1) {
      bannerTitle = siteData.themeConfig.navMenus.find(
        (item) => item.path == `/${pathList[0]}`
      ).title;
    } else if (pathList.length > 1) {
      bannerTitle = decodeURIComponent(pathList.at(-1));
    }

    return getPageData(routePath === "/" ? "home" : "custom", {}, bannerTitle);
  }

  // 文章：获取路由组件编译后的模块内容
  const matched = matchRoutes(routes, routePath);
  if (matched) {
    const moduleInfo = await matched[0].route.preload();
    return getPageData(
      "article",
      moduleInfo.frontmatter,
      moduleInfo.frontmatter.title || "",
      moduleInfo.toc
    );
  }
  return getPageData("404", {}, "404");
}

export function App() {
  return <Layout />;
}
