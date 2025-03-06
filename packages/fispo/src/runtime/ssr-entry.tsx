import { App, initPageData } from "./app";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { DataContext } from "./hooks";
import { HelmetProvider } from "react-helmet-async";

export async function render(pagePath: string, helmetContext: object) {
  const pageData = await initPageData(pagePath);
  return renderToString(
    <HelmetProvider context={helmetContext}>
      <DataContext.Provider value={pageData}>
        <StaticRouter location={pagePath}>
          <App />
        </StaticRouter>
      </DataContext.Provider>
    </HelmetProvider>
  );
}

// 导出路由数据
export { routes } from "virtual:routes";
