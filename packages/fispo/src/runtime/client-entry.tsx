import { createRoot, hydrateRoot } from "react-dom/client";
import { App, AppRouter, initPageData } from "./app";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./hooks";
import { HelmetProvider } from "react-helmet-async";
import { lifecycleList } from "fispo:lifecycle";
import { executeFunctionFromString } from "./util";
import "fispo:custom-css";

async function renderInBrowser() {
  const containerEl = document.getElementById("root");
  if (!containerEl) {
    throw new Error("#root element not found");
  }

  const enhancedApp = async () => {
    lifecycleList.configBeforeResolved.map((fn) =>
      executeFunctionFromString(fn)
    );
    // 初始化 PageData
    const pageData = await initPageData(location.pathname);

    lifecycleList.configResolved.map((fn) =>
      executeFunctionFromString(fn, pageData)
    );

    return function RootApp() {
      return (
        <HelmetProvider>
          <DataProvider value={pageData}>
            <BrowserRouter>
              <AppRouter>
                <App lifecycleList={lifecycleList} />
              </AppRouter>
            </BrowserRouter>
          </DataProvider>
        </HelmetProvider>
      );
    };
  };

  if (import.meta.env.DEV) {
    const RootApp = await enhancedApp();
    createRoot(containerEl).render(<RootApp />);
  } else {
    const RootApp = await enhancedApp();
    hydrateRoot(containerEl, <RootApp />);
  }
}

renderInBrowser();
