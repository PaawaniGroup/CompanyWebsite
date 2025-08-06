import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
  // For config files that run in Node.js
  {
    files: ["vite.config.js", "eslint.config.js", "webpack.config.js", "*.config.js"],
    languageOptions: { globals: globals.node },
  },
]);
