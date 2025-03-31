import debounce from "./debounce";

export type Direction = "up" | "down";
export type ScrollCallback = (direction: Direction, isTop: boolean) => void;

const NAV_HEIGHT = 60;

function UseScroll() {
  let callbackList: Array<ScrollCallback> = [];
  let lastScrollTop = Math.ceil(0);
  let direction: Direction = "down";

  function bind() {
    const currentScrollTop = Math.ceil(window.scrollY);
    if (currentScrollTop > lastScrollTop) {
      direction = "down";
    } else {
      direction = "up";
    }
    lastScrollTop = currentScrollTop;
    callbackList.forEach((callback) => {
      callback(direction, currentScrollTop === 0);
    });
  }

  function init() {
    console.log("滚动模块初始化");
    const newBind = debounce(bind, 10);
    window.addEventListener("scroll", newBind);
    bindingWindowScroll();
  }

  function add(callback: ScrollCallback) {
    callbackList.push(callback);
  }

  function remove(removeFn: ScrollCallback) {
    const index = callbackList.findIndex((fn) => fn == removeFn);
    callbackList.splice(index, 1);
  }

  function destory() {
    callbackList = [];
    window.removeEventListener("scroll", bind);
  }

  function scrollToTarget(target: HTMLElement, isSmooth: boolean) {
    const targetPadding = parseInt(
      window.getComputedStyle(target).paddingTop,
      10
    );

    const targetTop = target.getBoundingClientRect().top;

    const scrollTop =
      window.scrollY + targetTop + targetPadding - NAV_HEIGHT + 1;

    window.scrollTo({
      left: 0,
      top: scrollTop,
      behavior: isSmooth ? "smooth" : "auto",
    });
  }

  function bindingWindowScroll() {
    function scrollTo(el: HTMLElement, hash: string, isSmooth = false) {
      let target: HTMLElement | null = null;
      try {
        target = el.classList.contains("header-anchor")
          ? el
          : document.getElementById(decodeURIComponent(hash.slice(1)));
      } catch (e) {
        console.warn(e);
      }
      if (target) {
        scrollToTarget(target, isSmooth);
      }
    }

    window.addEventListener(
      "click",
      (e) => {
        const link = (e.target as Element).closest("a");
        if (link) {
          const { origin, hash, target, pathname, search } = link;
          const currentUrl = window.location;
          if (hash && target !== "_blank" && origin === currentUrl.origin) {
            if (
              pathname === currentUrl.pathname &&
              search === currentUrl.search &&
              hash &&
              hash !== currentUrl.hash
            ) {
              e.preventDefault();
              history.pushState(null, "", hash);
              scrollTo(link, hash, true);
              window.dispatchEvent(new Event("hashchange"));
            }
          }
        }
      },
      { capture: true }
    );
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }

  return {
    init,
    add,
    remove,
    destory,
    scrollToTarget,
  };
}

const scrollManager = UseScroll();

export default scrollManager;
