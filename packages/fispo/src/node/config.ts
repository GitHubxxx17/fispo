import { loadConfigFromFile } from "vite";
import fs from "fs-extra";
import { SiteConfig, UserConfig } from "../shared/types/index";
import { mergeConfig, defaultConfig } from "shared/utils/defaultConfig";

type RawConfig =
  | UserConfig
  | Promise<UserConfig>
  | (() => UserConfig | Promise<UserConfig>);

// 获取用户配置的路径
function getUserConfigPath() {
  try {
    const supportConfigFiles = ["fispo.config.ts", "fispo.config.js"];
    const configPath = supportConfigFiles.find(fs.pathExistsSync);
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

export function resolveSiteData(userConfig: UserConfig): UserConfig {
  return {
    title: userConfig.title || "fispo",
    description: userConfig.description || "SSG Framework",
    themeConfig: mergeConfig(defaultConfig, userConfig.themeConfig),
    vite: userConfig.vite || {},
    author: userConfig.author || "xxx",
    avatar: userConfig.avatar || "",
    backgroundImg: userConfig.backgroundImg || "",
    root: userConfig.root || "docs",
    postDir: userConfig.postDir || "post",
    public: userConfig.public || "public",
  };
}

export async function resolveConfig(
  command: "serve" | "build",
  mode: "development" | "production"
): Promise<SiteConfig> {
  const [configPath, userConfig] = await resolveUserConfig(command, mode);
  const siteData = resolveSiteData(userConfig as UserConfig);
  const siteConfig: SiteConfig = {
    root: siteData.root,
    postDir: siteData.postDir,
    public: siteData.public,
    configPath: configPath,
    siteData: siteData,
  };
  return siteConfig;
}

export function defineConfig(config: UserConfig) {
  return config;
}
