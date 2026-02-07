import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "prefer-const": "error",
      "no-empty": "off",
      "eqeqeq": "off",

      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-function": "off",

      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn"
    },
  },
];