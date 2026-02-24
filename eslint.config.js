import vuePlugin from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  {
    files: ["**/*.vue", "**/*.js"],
    languageOptions: {
      parser: vueParser,
    },
    plugins: {
      vue: vuePlugin,
    },
  },
];
