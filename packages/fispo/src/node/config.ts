import { loadConfigFromFile, mergeConfig } from "vite";
import fs from "fs-extra";
import { SiteConfig, UserConfig } from "shared/types";
import { defaultConfig } from "shared/utils/defaultConfig";
import { configFiles, DEFAULT_THEME_PATH } from "./constants";
import { DefaultThemeConfig } from "shared/types/default-theme";

type RawConfig<ThemeConfig = unknown> =
  | UserConfig<ThemeConfig>
  | Promise<UserConfig<ThemeConfig>>
  | (() => UserConfig<ThemeConfig> | Promise<UserConfig<ThemeConfig>>);

// 获取用户配置的路径
function getUserConfigPath() {
  try {
    const configPath = configFiles.find(fs.pathExistsSync);
    return configPath;
  } catch (e) {
    console.error(`Failed to load user config: ${e}`);
    throw e;
  }
}

export async function resolveUserConfig(
  command: "serve" | "build",
  mode: "development" | "production"
) {
  // 1. 获取配置文件路径
  const configPath = getUserConfigPath();
  // 2. 读取配置文件的内容
  const result = await loadConfigFromFile(
    {
      command,
      mode,
    },
    configPath
  );

  if (result) {
    const { config: rawConfig = {} as RawConfig } = result;
    // 三种情况:
    // 1. object
    // 2. promise
    // 3. function
    const userConfig = await (typeof rawConfig === "function"
      ? rawConfig()
      : rawConfig);
    return [configPath, userConfig] as const;
  } else {
    return [configPath, {} as UserConfig] as const;
  }
}

export async function resolveSiteData(
  userConfig: UserConfig
): Promise<UserConfig> {
  const targetConfig = userConfig.themeConfig;
  let deConfig: typeof targetConfig = defaultConfig;
  if (userConfig.theme) {
    deConfig = userConfig.theme.config;
  }

  const plugins = userConfig?.plugins ?? [];

  if (userConfig?.theme?.plugins) {
    plugins.push(...userConfig.theme.plugins);
  }

  return {
    base: userConfig.base || "/",
    title: userConfig.title || "fispo",
    description: userConfig.description || "fispo",
    theme: userConfig.theme || {
      name: "fish in the pool",
      layoutPath: DEFAULT_THEME_PATH,
      config: defaultConfig,
    },
    themeConfig: mergeConfig(deConfig, targetConfig),
    vite: {
      ...userConfig.vite,
      base: userConfig.base ?? "/",
    },
    author: userConfig.author || "xxx",
    avatar: userConfig.avatar || "/avatar.jpg",
    backgroundImg: userConfig.backgroundImg || "/bg.png",
    root: userConfig.root || "docs",
    postDir: userConfig.postDir || "/post",
    build: userConfig.build || "build",
    public: userConfig.public || "public",
    notFoundImg: userConfig.notFoundImg || "/404.png",
    logo: userConfig.logo || "/logo.png",
    markdown: userConfig.markdown || {},
    plugins: plugins || [],
    preloader: userConfig.preloader || false,
    deploy: userConfig.deploy || { branch: "gh-pages", repo: "" },
    htmlTags: userConfig.htmlTags || [],
    highlighter: userConfig.highlighter || { theme: "nord" },
    icons: userConfig.icons || [],
  };
}

export async function resolveConfig(
  command: "serve" | "build",
  mode: "development" | "production"
): Promise<SiteConfig> {
  const [configPath, userConfig] = await resolveUserConfig(command, mode);
  const siteData = await resolveSiteData(userConfig as UserConfig);
  const siteConfig: SiteConfig = {
    base: siteData.base,
    root: siteData.root,
    postDir: siteData.postDir,
    build: siteData.build,
    public: siteData.public,
    configPath: configPath,
    siteData: siteData,
    logo: siteData.logo,
    deploy: siteData.deploy,
  };
  return siteConfig;
}

export function defineConfig<ThemeConfig = DefaultThemeConfig>(
  config: UserConfig<ThemeConfig>
) {
  return config;
}
