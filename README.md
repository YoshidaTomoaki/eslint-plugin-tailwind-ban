# eslint-plugin-tailwind-ban

🚫 Disallow specific Tailwind CSS utility classes.  
✨ Supports [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new).

---

## 📦 Overview

This plugin lets you **ban specific Tailwind CSS design tokens** by class name.  
It is especially useful for enforcing design guidelines or phasing out deprecated tokens.

- ✅ Flat Config supported
- 🎯 Focused on **JSX `className`** string literals only
- ⚠️ Does **not parse** `classnames()`, template literals, or dynamic expressions
- ❌ Does **not check if classes are valid Tailwind tokens** (see [`eslint-plugin-tailwindcss`](https://github.com/francoismassart/eslint-plugin-tailwindcss) for that)

---

## 💡 Example

```tsx
<div className="text-red-500" /> // ❌ banned
<div className="text-green-500" /> // ✅ allowed
```

## With config:

```js
rules: {
  'tailwind-ban/no-deny-tailwind-tokens': ['error', {
    denyList: ['text-red-500']
  }]
}
```

## 🔧 Installation

```bash
pnpm add -D eslint-plugin-tailwind-ban
```

## 🚀 Usage (Flat Config)

```js
// eslint.config.js
import plugin from "eslint-plugin-tailwind-ban";

export default [
  {
    files: ["**/*.tsx"],
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
```

## 📝 License

MIT
