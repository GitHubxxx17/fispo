import { r as reactExports, j as jsxRuntimeExports } from "./client-entry-CizerYTH.js";
function Counter() {
  const [count, setCount] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: count }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCount((count2) => count2 + 1), children: "点击加1" })
  ] });
}
export {
  Counter as default
};
