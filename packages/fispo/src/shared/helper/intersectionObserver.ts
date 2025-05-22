import { inBrowser } from "./storage";

/**
 * 交叉观察器回调函数类型
 *
 * @param entry - 交叉观察器条目，包含目标元素信息和交叉状态
 */
type IntersectionCallback = (entry: IntersectionObserverEntry) => void;

/**
 * 交叉观察器管理器
 *
 * @remarks
 * 提供对IntersectionObserver API的封装，支持为元素添加多个交叉回调，
 * 自动管理观察器生命周期，避免内存泄漏，增强浏览器兼容性。
 */
class UseIntersectionObserver {
  // 原生交叉观察器实例
  private observer: IntersectionObserver | null;
  // 元素到其交叉回调列表的映射（使用WeakMap自动垃圾回收）
  private observeMap = new WeakMap<Element, IntersectionCallback[]>();

  /**
   * 创建交叉观察器实例
   *
   * @param options - 交叉观察器配置
   * @param options.root - 用于观察的根元素，默认为浏览器视口
   * @param options.rootMargin - 根元素边距，格式如 "10px 20px"
   * @param options.threshold - 交叉比例阈值，可单个值或数组（如0.1或[0.1, 0.5]）
   */
  constructor(options: IntersectionObserverInit = {}) {
    // 检查浏览器兼容性
    if (!inBrowser() || !("IntersectionObserver" in window)) {
      console.warn("IntersectionObserver is not supported in this browser");
      this.observer = null;
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // 执行元素对应的所有回调，并传递交叉状态信息
        this.observeMap.get(entry.target)?.forEach((fn) => {
          fn?.(entry);
        });
      });
    }, options);
  }

  /**
   * 为元素添加交叉监听回调
   *
   * @param el - 要监听的DOM元素
   * @param fn - 元素交叉状态变化时的回调函数
   *
   * @example
   * ```tsx
   * const handleIntersect = (entry: IntersectionObserverEntry) => {
   *   if (entry.isIntersecting) {
   *     console.log('元素进入视口');
   *   }
   * };
   *
   * observer.addIntersect(element, handleIntersect);
   * ```
   */
  addIntersect(el: Element, fn: IntersectionCallback): void {
    if (!this.observer) return;

    const fnList = this.observeMap.get(el) ?? [];

    // 避免重复添加相同回调
    if (!fnList.includes(fn)) {
      this.observeMap.set(el, [...fnList, fn]);

      // 首次添加时开始观察元素
      if (fnList.length === 0) {
        this.observer.observe(el);
      }
    }
  }

  /**
   * 移除元素的交叉监听回调
   *
   * @param el - 要取消监听的DOM元素
   * @param removeFn - 要移除的回调函数引用
   *
   * @example
   * ```tsx
   * observer.removeIntersect(element, handleIntersect);
   * ```
   */
  removeIntersect(el: Element, removeFn: IntersectionCallback): void {
    if (!this.observer) return;

    const fnList = this.observeMap.get(el) ?? [];
    const newFnList = fnList.filter((fn) => fn !== removeFn);

    this.observeMap.set(el, newFnList);

    // 无回调时停止观察，释放资源
    if (newFnList.length === 0) {
      this.observer.unobserve(el);
      console.log(el, "取消监听成功");
    }
  }

  /**
   * 销毁观察器实例
   *
   * @remarks
   * 清除所有观察关系并重置内部状态，建议在组件卸载时调用
   *
   * @example
   * ```tsx
   * useEffect(() => {
   *   return () => {
   *     observer.destroy();
   *   };
   * }, []);
   * ```
   */
  destroy(): void {
    this.observer?.disconnect();
    this.observeMap = new WeakMap(); // 重置映射，允许旧引用被垃圾回收
  }
}

/**
 * 全局共享的交叉观察器实例
 *
 * @remarks
 * 默认配置：根元素为视口，阈值为0.1（元素可见度达到10%时触发）
 */
const intersectionObserver = new UseIntersectionObserver({
  root: null,
  threshold: 0.1,
});

export { UseIntersectionObserver, intersectionObserver };
