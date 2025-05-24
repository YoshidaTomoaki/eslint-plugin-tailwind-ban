import { TSESLint } from "@typescript-eslint/utils";

type Options = [{ denyList: string[] }];
type MessageIds = "denied";

const rule: TSESLint.RuleModule<MessageIds, Options> = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow specific Tailwind CSS classes",
    },
    schema: [
      {
        type: "object",
        properties: {
          denyList: {
            type: "array",
            items: { type: "string" },
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      denied: 'Usage of Tailwind class "{{className}}" is not allowed.',
    },
  },
  defaultOptions: [
    {
      denyList: [],
    },
  ],
  create(context) {
    const denyList = context.options[0]?.denyList ?? [];

    return {
      JSXAttribute(node) {
        if (node.name.name !== "className") return;
        if (!node.value || node.value.type !== "Literal") return;

        const value = node.value.value;
        if (typeof value !== "string") return;

        const classes = value.split(/\s+/);
        for (const cls of classes) {
          if (denyList.includes(cls)) {
            context.report({
              node: node.value,
              messageId: "denied",
              data: { className: cls },
            });
          }
        }
      },
    };
  },
};

export default rule;
