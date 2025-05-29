import { inBrowser } from "shared/helper";

let script = null;

export const createBusuanziScript = () => {
  const script = document.createElement("script");
  script.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
  script.async = true;
  document.body.appendChild(script);
  return script;
};

// 重新加载 Busuanzi 脚本的函数
export const reloadBusuanzi = () => {
  if (!inBrowser()) return;
  const newScript = createBusuanziScript();
  if (script) {
    document.body.removeChild(script);
    document.body.appendChild(newScript);
  } else {
    document.body.appendChild(newScript);
  }
  script = newScript;
};
