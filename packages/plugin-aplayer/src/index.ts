import { FispoPlugin } from "fispo-core/plugin";
import { vitePluginPlayer } from "./vitePluginPlayer.js";
import { join } from "path";

/**
 * APlayer 插件的配置选项接口
 */
export interface aplayerPluginOptions {
  /**
   * 歌曲 ID、歌单 ID、专辑 ID 或搜索关键词
   */
  id?: string;

  /**
   * 音乐平台，可选值：'netease', 'tencent', 'kugou', 'xiami', 'baidu'
   */
  server?: "netease" | "tencent" | "kugou" | "xiami" | "baidu";

  /**
   * 类型，可选值：'song', 'playlist', 'album', 'search', 'artist'
   */
  type?: "song" | "playlist" | "album" | "search" | "artist";

  /**
   * 音乐链接，支持的平台：'netease', 'tencent', 'xiami'
   */
  auto?: string;

  /**
   * 启用固定模式
   * @default true
   */
  fixed?: boolean;

  /**
   * 启用迷你模式
   * @default false
   */
  mini?: boolean;

  /**
   * 音频自动播放
   * @default false
   */
  autoplay?: boolean;

  /**
   * 主题颜色
   * @default '#2980b9'
   */
  theme?: string;

  /**
   * 播放器循环播放模式，可选值：'all', 'one', 'none'
   * @default 'all'
   */
  loop?: "all" | "one" | "none";

  /**
   * 播放器播放顺序，可选值：'list', 'random'
   * @default 'list'
   */
  order?: "list" | "random";

  /**
   * 预加载模式，可选值：'none', 'metadata', 'auto'
   * @default 'auto'
   */
  preload?: "none" | "metadata" | "auto";

  /**
   * 默认音量，注意播放器会记住用户设置，用户自行设置音量后默认音量将不再生效
   * @default 0.7
   */
  volume?: number;

  /**
   * 防止同时播放多个播放器，当此播放器开始播放时暂停其他播放器
   * @default true
   */
  mutex?: boolean;

  /**
   * 歌词类型
   * @default 0
   */
  "lrc-type"?: number;

  /**
   * 指示列表是否应在初始时折叠
   * @default false
   */
  "list-folded"?: boolean;

  /**
   * 列表的最大高度
   * @default '340px'
   */
  "list-max-height"?: string;

  /**
   * 存储播放器设置的 localStorage 键
   * @default 'metingjs'
   */
  "storage-name"?: string;
}

/**
 * 基于 metingJS 的 aplayer 音频插件
 */
export function aplayerPlugin(options: aplayerPluginOptions): FispoPlugin {
  return {
    name: "fispo:plugin-aplayer",
    vite: {
      plugins: [vitePluginPlayer()],
    },
    alias: {
      "@MetingPlayer": join(__dirname, "../src/player.tsx"),
    },
    globalComponents: {
      path: "@MetingPlayer",
      props: options,
    },
  };
}
