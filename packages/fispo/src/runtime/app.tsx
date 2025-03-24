import { matchRoutes } from "react-router-dom";
import { routes } from "virtual:routes";
import { PageData, Route } from "shared/types";
import siteData from "fispo:site-data";
import { handleRoutes } from "../shared/utils/handleRoutes";
import { sortByDate } from "../shared/utils/date";
import { usePageData } from "./hooks";
import ThemeLayout from "fispo:theme";
import { useEffect, useState } from "react";
import Preloader from "fispo:preloader";
import { checkAllAssetsLoaded, removeBase } from "./util";
import { GlobalComponents } from "shared/components";

export async function initPageData(routePath: string): Promise<PageData> {
  routePath = removeBase(routePath);
  const pathList = routePath.split("/").filter(Boolean);

  //  判断是否为nav的路径
  const isHomeOrCustom =
    pathList.length === 0 ||
    siteData.themeConfig.navMenus.find(
      (item) => item.path == `/${pathList[0]}`
    );

  const { articlesList, tags, categories } = await handleRoutes(routes);

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
    const moduleInfo = await (matched[0].route as Route).preload();

    return getPageData(
      "article",
      moduleInfo.frontmatter,
      moduleInfo.frontmatter.title || "",
      moduleInfo.toc
    );
  }
  return getPageData("404", {}, "404");
}

export function App({ ssr = false }: { ssr?: boolean }) {
  const pageData = usePageData();
  const [finishLoading, setFinishLoading] = useState(false);
  useEffect(() => {
    const unmountLoading = () => {
      checkAllAssetsLoaded().then(() => {
        setFinishLoading(true);
      });
    };
    if (siteData.preloader) unmountLoading();
  }, []);

  return (
    <>
      {siteData.preloader && <Preloader finishLoading={finishLoading} />}
      <ThemeLayout pageData={pageData} />
      {!ssr && <GlobalComponents />}
    </>
  );
}
