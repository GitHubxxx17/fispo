/**
 * 创建一个防抖函数，该函数在指定延迟后执行回调
 * 常用于处理高频触发的事件（如滚动、窗口调整、输入框搜索等）
 *
 * @param func - 要防抖的回调函数（支持参数）
 * @param delay - 延迟时间（毫秒）
 * @returns 防抖处理后的函数
 */
export default function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (this: any, ...args: Parameters<T>) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
      timer = null;
    }, delay);
  };
}
