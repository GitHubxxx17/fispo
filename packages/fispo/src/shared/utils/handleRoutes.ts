import { Route } from "shared/types";
import { formatDateToYYYYMMDD } from "./date";

export async function handleRoutes(routes: Route[], postDir: string) {
  // 处理文章frontmatter数据
  const articlesList = [];
  // 标签
  const tags = {};
  // 分类
  const categories = {};
  for await (const route of routes) {
    const moduleInfo = await route.preload();
    if (!moduleInfo?.frontmatter) continue;
    moduleInfo.frontmatter.tags = moduleInfo.frontmatter.tags ?? [];
    moduleInfo.frontmatter.categories = moduleInfo.frontmatter.categories ?? "";

    if (!route.path.startsWith(postDir)) continue;

    moduleInfo.frontmatter.date =
      moduleInfo.frontmatter.date ?? new Date().toLocaleString();
    articlesList.push({
      ...moduleInfo.frontmatter,
      date: formatDateToYYYYMMDD(moduleInfo.frontmatter.date),
      path: route.path,
      info: moduleInfo.mdInfo,
    });
    moduleInfo.frontmatter.tags.forEach((tag) => {
      if (tags[tag]) {
        tags[tag].push(route.path);
      } else {
        tags[tag] = [route.path];
      }
    });
    const category = moduleInfo.frontmatter.categories;
    if (category) {
      if (categories[category]) {
        categories[category].push(route.path);
      } else {
        categories[category] = [route.path];
      }
    }
  }

  return {
    articlesList,
    tags,
    categories,
  };
}

export async function getTagsAndCategoriesRoutes(
  routes: Route[],
  postDir: string
) {
  const { tags, categories } = await handleRoutes(routes, postDir);
  const tagsRoutes = Object.keys(tags).map((tag) => {
    return {
      path: `/tag/${tag}`,
    };
  });
  const categoriesRoutes = Object.keys(categories).map((category) => {
    return {
      path: `/category/${category}`,
    };
  });

  return [...tagsRoutes, ...categoriesRoutes];
}
