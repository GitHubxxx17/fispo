import debounce from "./debounce";

/**
 * 滚动方向类型：向上或向下
 */
export type Direction = "up" | "down";

/**
 * 滚动回调函数类型
 * @param direction - 滚动方向
 * @param isTop - 是否滚动到顶部
 */
export type ScrollCallback = (direction: Direction, isTop: boolean) => void;

/**
 * 滚动管理器类
 * 处理页面滚动事件、方向检测和锚点导航
 */
class ScrollManager {
  /** 滚动回调函数列表 */
  private callbackList: Array<ScrollCallback> = [];

  /** 上次滚动位置 */
  private lastScrollTop: number = 0;

  /** 当前滚动方向 */
  private direction: Direction = "down";

  /** 防抖处理后的滚动事件处理函数 */
  private debouncedBind: () => void;

  /** 是否已初始化标志 */
  private isInitialized: boolean = false;

  /** 导航栏高度，默认为60px */
  private navHeight: number = 60;

  /** 导航栏是否滚动折叠 */
  private navIsHidden: boolean = true;

  constructor() {
    // 使用防抖优化滚动事件处理
    this.debouncedBind = debounce(this.bind.bind(this), 10);
  }

  /**
   * 设置导航栏高度
   * @param height - 导航栏高度（像素）
   */
  public setNavHeight(height: number) {
    this.navHeight = height;
  }

  /**
   * 设置导航栏是否滚动折叠
   * @param hidden - 导航栏是否滚动折叠
   */
  public setNavIsScrollHidden(hidden: boolean) {
    this.navIsHidden = hidden;
  }

  /**
   * 处理滚动事件
   * 1. 检测滚动方向
   * 2. 调用所有注册的回调函数
   */
  private bind() {
    const currentScrollTop = Math.ceil(window.scrollY);

    // 判断滚动方向
    if (currentScrollTop > this.lastScrollTop) {
      this.direction = "down";
    } else {
      this.direction = "up";
    }

    this.lastScrollTop = currentScrollTop;
    // 触发所有回调函数
    this.callbackList.forEach((callback) => {
      callback(this.direction, currentScrollTop === 0);
    });
  }

  /**
   * 初始化滚动管理器
   * 1. 添加滚动事件监听器
   * 2. 绑定锚点导航处理
   */
  public init() {
    if (this.isInitialized) return;

    console.log("滚动模块初始化");

    // 添加滚动事件监听器
    window.addEventListener("scroll", this.debouncedBind);

    // 绑定锚点导航处理
    this.bindingWindowScroll();

    this.isInitialized = true;
  }

  /**
   * 添加滚动回调函数
   * @param callback - 滚动回调函数
   */
  public add(callback: ScrollCallback) {
    this.callbackList.push(callback);
  }

  /**
   * 移除滚动回调函数
   * @param removeFn - 需要移除的回调函数
   */
  public remove(removeFn: ScrollCallback) {
    const index = this.callbackList.findIndex((fn) => fn === removeFn);
    if (index !== -1) {
      this.callbackList.splice(index, 1);
    }
  }

  /**
   * 销毁滚动管理器
   * 1. 移除滚动事件监听器
   * 2. 清空回调函数列表
   */
  public destroy() {
    window.removeEventListener("scroll", this.debouncedBind);
    this.callbackList = [];
    this.isInitialized = false;
  }

  /**
   * 滚动到指定元素
   * @param target - 目标元素
   * @param isSmooth - 是否使用平滑滚动
   */
  public scrollToTarget(target: HTMLElement, isSmooth: boolean = true) {
    // 获取元素的内边距
    const targetPadding = parseInt(
      window.getComputedStyle(target).paddingTop,
      10
    );

    // 获取元素相对于视口的位置
    const targetTop = target.getBoundingClientRect().top;

    // 计算最终滚动位置（考虑导航栏高度）
    let scrollTop = window.scrollY + targetTop + targetPadding + 1;

    if (targetTop < 0 || !this.navIsHidden) {
      scrollTop -= this.navHeight;
    }
    // 执行滚动
    window.scrollTo({
      left: 0,
      top: scrollTop,
      behavior: isSmooth ? "smooth" : "auto",
    });
  }

  /**
   * 绑定锚点导航处理
   * 1. 处理内部链接点击事件
   * 2. 处理 hashchange 事件
   * @returns 清理函数，用于移除事件监听器
   */
  private bindingWindowScroll() {
    /**
     * 滚动到指定锚点
     * @param el - 触发滚动的元素
     * @param hash - 锚点哈希值
     * @param isSmooth - 是否平滑滚动
     */
    const scrollTo = (el: HTMLElement, hash: string, isSmooth = false) => {
      let target: HTMLElement | null = null;

      try {
        // 优先使用 header-anchor 元素，否则通过 ID 查找
        target = el.classList.contains("header-anchor")
          ? el
          : document.getElementById(decodeURIComponent(hash.slice(1)));
      } catch (e) {
        console.warn("解析锚点失败:", e);
      }

      if (target) {
        this.scrollToTarget(target, isSmooth);
      }
    };

    /**
     * 点击事件处理函数
     * 拦截内部锚点链接并处理滚动
     */
    const clickHandler = (e: Event) => {
      const link = (e.target as Element).closest("a");

      if (link) {
        const { origin, hash, target, pathname, search } = link;
        const currentUrl = window.location;

        // 检查是否为内部锚点链接
        if (hash && target !== "_blank" && origin === currentUrl.origin) {
          // 检查路径和查询参数是否相同，且有新的锚点
          if (
            pathname === currentUrl.pathname &&
            search === currentUrl.search &&
            hash &&
            hash !== currentUrl.hash
          ) {
            e.preventDefault();

            // 更新 URL 但不刷新页面
            history.pushState(null, "", hash);

            // 滚动到目标位置
            scrollTo(link, hash, true);

            // 触发 hashchange 事件（供其他组件监听）
            window.dispatchEvent(new Event("hashchange"));
          }
        }
      }
    };

    /**
     * hashchange 事件处理函数
     * 阻止默认行为，使用自定义滚动逻辑
     */
    const hashChangeHandler = (e: Event) => {
      e.preventDefault();
    };

    // 添加事件监听器
    window.addEventListener("click", clickHandler, { capture: true });
    window.addEventListener("hashchange", hashChangeHandler);

    // 返回清理函数
    return () => {
      window.removeEventListener("click", clickHandler);
      window.removeEventListener("hashchange", hashChangeHandler);
    };
  }
}

/**
 * 导出滚动管理器单例
 */
const scrollManager = new ScrollManager();

export default scrollManager;
