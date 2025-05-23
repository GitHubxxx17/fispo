import { FispoPlugin } from "fispo-core/plugin";
import { rehypePluginTags } from "./tags";

export function themeDocsPlugin(): FispoPlugin {
  return {
    name: "fispo-theme-docs:plugin-tags",
    markdown: {
      rehypePlugins: [rehypePluginTags],
    },
  };
}
