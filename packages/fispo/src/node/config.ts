import { loadConfigFromFile } from "vite";
import fs from "fs-extra";
import { SiteConfig, UserConfig } from "shared/types";
import { mergeConfig, defaultConfig } from "shared/utils/defaultConfig";
import { configFiles } from "./constants";
import { DefaultThemeConfig } from "shared/types/default-theme";
import { join } from "path";
import { pathToFileURL } from "url";

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
  const isDev = process.env.NODE_ENV === "development";
  const targetConfig = userConfig.themeConfig;
  let deConfig = defaultConfig;
  if (userConfig.theme) {
    const path = join(
      __dirname,
      "../..",
      `${isDev ? "" : "@fispo"}`,
      userConfig.theme,
      "src/config.js"
    );
    const { default: themeConfig } = await import(
      pathToFileURL(path).toString()
    );
    deConfig = themeConfig;
  }

  return {
    title: userConfig.title || "fispo",
    description: userConfig.description || "SSG Framework",
    theme: userConfig.theme || "",
    themeConfig: mergeConfig(deConfig, targetConfig),
    vite: userConfig.vite || {},
    author: userConfig.author || "xxx",
    avatar: userConfig.avatar || "/avatar.jpg",
    backgroundImg: userConfig.backgroundImg || "/bg.png",
    root: userConfig.root || "docs",
    postDir: userConfig.postDir || "post",
    public: userConfig.public || "public",
    notFoundImg: userConfig.notFoundImg || "/404.png",
    logo: userConfig.logo || "/logo.png",
  };
}

export async function resolveConfig(
  command: "serve" | "build",
  mode: "development" | "production"
): Promise<SiteConfig> {
  const [configPath, userConfig] = await resolveUserConfig(command, mode);
  const siteData = await resolveSiteData(userConfig as UserConfig);
  const siteConfig: SiteConfig = {
    root: siteData.root,
    postDir: siteData.postDir,
    public: siteData.public,
    configPath: configPath,
    siteData: siteData,
    logo: siteData.logo,
  };
  return siteConfig;
}

export function defineConfig<ThemeConfig = DefaultThemeConfig>(
  config: UserConfig<ThemeConfig>
) {
  return config;
}
