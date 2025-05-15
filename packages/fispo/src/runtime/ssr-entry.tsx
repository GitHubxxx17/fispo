import { App, AppRouter, initPageData } from "./app";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { DataProvider } from "./hooks";
import { HelmetProvider } from "react-helmet-async";
import { globalComponents } from "fispo:globalComponents";

export interface renderResultOptions {
  appHtml: string;
  globalComponentsHtml: string;
}

export async function render(
  pagePath: string,
  helmetContext: object
): Promise<renderResultOptions> {
  const pageData = await initPageData(pagePath);

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <DataProvider value={pageData}>
        <StaticRouter location={pagePath}>
          <AppRouter>
            <App ssr />
          </AppRouter>
        </StaticRouter>
      </DataProvider>
    </HelmetProvider>
  );

  const globalComponentsHtml = renderToString(
    <>{globalComponents.map((g) => g.element)}</>
  );

  return {
    appHtml,
    globalComponentsHtml,
  };
}

// 导出路由数据
export { routes } from "virtual:routes";
