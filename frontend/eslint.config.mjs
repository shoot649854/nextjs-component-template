import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // {
  //   ignores: [".next/**", "node_modules/**"],
  //   rules: {
  // "no-inline-comments": "error",
  // "spaced-comment": ["error", "never"],
  // "no-warning-comments": [
  //   "warn",
  //   { terms: ["todo", "fixme", "xxx"], location: "start" },
  // ],
  //   },
  // },
];

export default eslintConfig;
