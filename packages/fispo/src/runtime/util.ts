import { normalizeSlash, withBase } from "shared/utils";
import siteData from "fispo:site-data";

const checkDomReady = () => {
  return new Promise((resolve) => {
    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      // 若 DOM 已解析完成或页面完全加载，则立即 resolve
      resolve(0);
    } else {
      // 否则监听 DOMContentLoaded 事件（DOM 解析完成时触发）
      document.addEventListener("DOMContentLoaded", resolve, { once: true });
    }
  });
};

const checkAllImagesLoaded = () => {
  const images = Array.from(document.querySelectorAll("img"));
  return Promise.all(
    images.map((img) => {
      return new Promise((resolve) => {
        let isResolved = false;

        // 加载成功/失败的回调
        const done = () => {
          if (isResolved) return;
          isResolved = true;
          resolve("loaded");
          cleanup();
        };

        // 超时处理
        const timeoutId = setTimeout(() => {
          if (isResolved) return;
          isResolved = true;
          console.warn(`图片加载超时: ${img.src}`);
          resolve("timeout");
          cleanup();
        }, 3000);

        // 清理事件监听
        const cleanup = () => {
          clearTimeout(timeoutId);
          img.removeEventListener("load", done);
          img.removeEventListener("error", done);
        };

        // 监听加载结果
        if (img.complete) {
          done();
        } else {
          img.addEventListener("load", done);
          img.addEventListener("error", done);
        }
      });
    })
  );
};

export const checkAllAssetsLoaded = async () => {
  await checkDomReady();
  console.log("dom节点加载完成");
  await checkAllImagesLoaded();
  console.log("图片资源加载完成");
};

export const baseUrl = (url = "/") => {
  return withBase(url, siteData.base);
};

export function removeBase(url: string): string {
  const normalizedBase = normalizeSlash(siteData.base);
  const normalizedUrl = url.replace(normalizedBase, "") || "/";
  return normalizedUrl;
}

export const executeFunctionFromString = (
  functionString: string,
  config?: any
) => {
  const funString =
    functionString.charAt(0) !== "("
      ? `function ${functionString}`
      : functionString;

  try {
    const func = new Function(`return ${funString}`)();
    if (typeof func === "function") {
      func(config);
    } else {
      console.log("传入的字符串不是有效的函数");
    }
  } catch (error) {
    console.error("执行函数时出错:", error);
  }
};
