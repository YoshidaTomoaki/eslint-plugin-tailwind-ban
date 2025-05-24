// for playground
import plugin from "./dist/index.js";
import parser from "@typescript-eslint/parser";

export default [
  {
    files: ["playground/**/*.ts", "playground/**/*.tsx"],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "tailwind-ban": plugin,
    },
    rules: {
      "tailwind-ban/no-deny-tailwind-tokens": [
        "error",
        {
          denyList: ["text-red-500"],
        },
      ],
    },
  },
];
