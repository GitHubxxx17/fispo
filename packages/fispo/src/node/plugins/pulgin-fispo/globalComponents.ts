import { Plugin } from "vite";
import { SiteConfig } from "shared/types/index";

const SITE_GLOBALCOMPONENTS_ID = "fispo:globalComponents";

export function golbalComponentsPlugin(config: SiteConfig): Plugin {
  return {
    name: "fispo:globalComponents",
    resolveId(id) {
      if (id === SITE_GLOBALCOMPONENTS_ID) {
        return "\0" + SITE_GLOBALCOMPONENTS_ID;
      }
    },
    async load(id) {
      if (id === "\0" + SITE_GLOBALCOMPONENTS_ID) {
        try {
          const pugins = config.siteData.plugins;
          const globalComponents = pugins
            .map((item) => item.globalComponents)
            .filter(Boolean);

          return `
import React from 'react';
${globalComponents.map((globalComponent, index) => {
  return `import GlobalComponent${index} from '${globalComponent.path}';`;
})}

export const globalComponents = [
${globalComponents.map((globalComponent, index) => {
  return `{element: React.createElement(GlobalComponent${index}, ${JSON.stringify(globalComponent.props)})}`;
})}
];
          `;
        } catch (error) {
          console.error("插件加载失败:", error);
        }
      }
    },
  };
}
