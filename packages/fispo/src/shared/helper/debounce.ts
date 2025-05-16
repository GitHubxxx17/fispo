/**
 * 创建一个防抖函数，该函数在指定延迟后执行回调
 * 常用于处理高频触发的事件（如滚动、窗口调整、输入框搜索等）
 *
 * @param func - 要防抖的回调函数
 * @param delay - 延迟时间（毫秒）
 * @returns 防抖处理后的函数
 */
export default function debounce(func: () => void, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      // eslint-disable-next-line prefer-spread, prefer-rest-params
      func.apply(null, arguments);
      timer = null;
    }, delay);
  };
}
