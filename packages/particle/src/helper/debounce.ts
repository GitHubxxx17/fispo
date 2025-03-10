export default function debounce(func: () => void, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      // eslint-disable-next-line prefer-spread, prefer-rest-params
      func.apply(null, arguments);
    }, delay);
  };
}
