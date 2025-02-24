import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      /** 不需要在每个使用 JSX 的文件中导入 React */
      "react/react-in-jsx-scope": "off",
      /** 可以出现any类型 */
      "@typescript-eslint/no-explicit-any": "off",
      /** 需要分号 */
      semi: ["error", "always"],
      /** 可以使用require */
      "@typescript-eslint/no-require-imports": "off",
      /** 可以用ts-ignore */
      "@typescript-eslint/ban-ts-comment": "off",
      /**
       * 不检查以下划线开头的 未使用的变量
       * 包含了参数变量，解构变量，catch中的参数变量
       */
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    // 忽略规则设置
    ignores: [
      "eslint.config.cjs",
      "node_modules",
      "package.json",
      "pnpm-lock.yaml",
      "dist",
      "bin",
      "esm-cjs",
      "docs",
      "build",
      "packages/fispo/docs",
    ],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
