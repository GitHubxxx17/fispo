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
import {
  checkAllAssetsLoaded,
  executeFunctionFromString,
  removeBase,
} from "./util";
import { GlobalComponents } from "shared/components";
import { LifecycleList } from "shared/types/plugin";

export async function initPageData(routePath: string): Promise<PageData> {
  routePath = removeBase(routePath);
  const pathList = routePath.split("/").filter(Boolean);

  //  判断是否为nav的路径
  const isNav =
    pathList.length === 0 ||
    siteData.themeConfig.navMenus.find(
      (item) => item.path == `/${pathList[0]}` || item.path == routePath
    );

  const { articlesList, tags, categories } = await handleRoutes(
    routes,
    siteData.postDir
  );

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

  // 文章：获取路由组件编译后的模块内容
  const matched = matchRoutes(routes, routePath);
  const moduleInfo = await (matched?.[0].route as Route)?.preload();

  // 导航栏页面
  if (isNav) {
    let bannerTitle = siteData.title;
    const title = moduleInfo?.frontmatter?.title;

    if (title) {
      bannerTitle = title;
    } else if (pathList.length == 1) {
      bannerTitle = siteData.themeConfig.navMenus.find(
        (item) => item.path == `/${pathList[0]}` || item.path == routePath
      ).title;
    } else if (pathList.length > 1) {
      bannerTitle = decodeURIComponent(pathList.at(-1));
    }

    return getPageData(
      routePath === "/" ? "home" : "custom",
      moduleInfo?.frontmatter ?? {},
      bannerTitle,
      moduleInfo?.toc ?? []
    );
  }

  if (matched) {
    return getPageData(
      "article",
      moduleInfo?.frontmatter ?? {},
      moduleInfo?.frontmatter?.title || "",
      moduleInfo?.toc
    );
  }
  return getPageData("404", {}, "404");
}

export function App({
  ssr = false,
  lifecycleList,
}: {
  ssr?: boolean;
  lifecycleList?: LifecycleList;
}) {
  const pageData = usePageData();
  pageData.ssr = ssr;
  const [finishLoading, setFinishLoading] = useState(false);

  useEffect(() => {
    lifecycleList.beforeRenderpage.forEach((fn) =>
      executeFunctionFromString(fn, pageData)
    );

    const unmountLoading = () => {
      checkAllAssetsLoaded().then(() => {
        setFinishLoading(true);
        lifecycleList.afterRenderPage.forEach((fn) =>
          executeFunctionFromString(fn, pageData)
        );
      });
    };
    if (siteData.preloader) unmountLoading();

    return () => {
      lifecycleList.pageClosed.forEach((fn) =>
        executeFunctionFromString(fn, pageData)
      );
    };
  }, []);

  return (
    <>
      {siteData.preloader && <Preloader finishLoading={finishLoading} />}
      <ThemeLayout pageData={pageData} />
      {!ssr && <GlobalComponents />}
    </>
  );
}
