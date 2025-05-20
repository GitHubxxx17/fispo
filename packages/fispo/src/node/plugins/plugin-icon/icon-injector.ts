import { Plugin } from "vite";
import { SiteConfig } from "shared/types";
import { DEFAULT_ICON } from "../../constants";

const getPackage = (prefix: string) => {
  if (prefix.startsWith("fas")) {
    return "free-solid-svg-icons";
  } else if (prefix.startsWith("far")) {
    return "free-regular-svg-icons";
  } else if (prefix.startsWith("fab")) {
    return "free-brands-svg-icons";
  }
  return "free-solid-svg-icons";
};

export function IconInjectorplugin(config: SiteConfig): Plugin {
  const icons = config.siteData.themeConfig.navMenus
    .map((item) => item?.icon)
    .filter(Boolean)
    .concat(DEFAULT_ICON)
    .concat(config.siteData.icons);

  return {
    name: "fa-icon-injector",
    enforce: "post",
    resolveId(id) {
      if (id === "fispo:fa-icons") return id;
    },
    load(id) {
      if (id === "fispo:fa-icons") {
        const imports = [];
        const iconKeys = new Set<string>();
        icons.forEach((icon) => {
          const { prefix, iconName } = icon;
          const normalizedName = iconName
            .split(/[-_]/)
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join("");
          const importName = `fa${normalizedName}`;

          if (iconKeys.has(importName)) {
            return;
          }
          const packageName = `@fortawesome/${getPackage(prefix)}`;
          imports.push(`import { ${importName} } from '${packageName}';`);
          iconKeys.add(importName);
        });

        return `
        import { library } from "@fortawesome/fontawesome-svg-core";
          ${imports.join("\n")}
          export const iconList = [
            ${Array.from(iconKeys).join(",")}
          ]
          library.add(...iconList);
        `;
      }
    },
  };
}
