import debounce from "./debounce";

export type Direction = "up" | "down";
export type ScrollCallback = (direction: Direction, isTop: boolean) => void;

const NAV_HEIGHT = 60;

function UseScroll() {
  let callbackList: Array<ScrollCallback> = [];
  let lastScrollTop = Math.ceil(window.scrollY);
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

    let scrollTop = window.scrollY + targetTop + targetPadding;
    if (targetTop < 0) {
      scrollTop -= NAV_HEIGHT;
    }
    window.scrollTo({
      left: 0,
      top: scrollTop,
      behavior: isSmooth ? "smooth" : "auto",
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
