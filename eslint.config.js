import vuePlugin from "eslint-plugin-vue"
import vueParser from "vue-eslint-parser"
import prettierConfig from "eslint-config-prettier"
import prettierPlugin from "eslint-plugin-prettier"

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  ...vuePlugin.configs["flat/recommended"],
  {
    files: ["**/*.vue", "**/*.js"],
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: vueParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/require-default-prop": "off",
      "prettier/prettier": [
        "error",
        {
          tabWidth: 2,
          vueIndentScriptAndStyle: true,
          semi: false,
        },
      ],
    },
  },
  prettierConfig,
]
