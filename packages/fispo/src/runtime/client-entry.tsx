import { createRoot } from "react-dom/client";
import { App, initPageData } from "./app";
import { BrowserRouter } from "react-router-dom";
import { DataContext } from "./hooks";
import { HelmetProvider } from "react-helmet-async";
import { lifecycleList } from "fispo:lifecycle";
import { executeFunctionFromString } from "./util";

async function renderInBrowser() {
  const containerEl = document.getElementById("root");
  if (!containerEl) {
    throw new Error("#root element not found");
  }

  lifecycleList.configBeforeResolved.map((fn) => executeFunctionFromString(fn));
  // 初始化 PageData
  const pageData = await initPageData(location.pathname);

  lifecycleList.configResolved.map((fn) =>
    executeFunctionFromString(fn, pageData)
  );

  createRoot(containerEl).render(
    <HelmetProvider>
      <DataContext.Provider value={pageData}>
        <BrowserRouter>
          <App lifecycleList={lifecycleList} />
        </BrowserRouter>
      </DataContext.Provider>
    </HelmetProvider>
  );
}

renderInBrowser();
