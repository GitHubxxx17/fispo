import { normalizePath, Plugin } from "vite";
import { SiteConfig } from "shared/types/index";
import { join } from "path";
import { EXTERNAL_URL_RE } from "shared/constants";

const SITE_CUSTOMCSS_ID = "fispo:custom-css";

export function customCssPlugin(config: SiteConfig): Plugin {
  return {
    name: "fispo:custom-css",
    resolveId(id) {
      if (id === SITE_CUSTOMCSS_ID) {
        return "\0" + SITE_CUSTOMCSS_ID;
      }
    },
    async load(id) {
      if (id === "\0" + SITE_CUSTOMCSS_ID) {
        try {
          const tags = config.siteData.htmlTags.filter(
            (tags) =>
              tags.tag === "link" &&
              !EXTERNAL_URL_RE.test(tags.attrs.href as string)
          );

          const stylePaths = tags.map((tag) =>
            join(config.root, tag.attrs.href as string)
          );

          return stylePaths
            .map((path) => {
              const stylePath = normalizePath(path);
              return `import '${stylePath.startsWith("/") ? stylePath : "/" + stylePath}';`;
            })
            .join("\n");
        } catch (error) {
          console.error("自定义 css 加载失败:", error);
        }
      }
    },
  };
}
