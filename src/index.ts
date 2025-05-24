import noDenyTailwindTokens from "./rules/no-deny-tailwind-tokens.js";

export const rules = {
  "no-deny-tailwind-tokens": noDenyTailwindTokens,
};

const plugin = {
  rules,
};

export default plugin;
