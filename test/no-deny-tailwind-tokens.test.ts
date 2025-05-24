import { describe, it, afterAll } from "vitest";
import { RuleTester } from "@typescript-eslint/rule-tester";
import rule from "../src/rules/no-deny-tailwind-tokens";

// https://typescript-eslint.io/packages/rule-tester/#vitest
RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.afterAll = afterAll;

const ruleTester = new RuleTester({
  languageOptions: {
    parser: require("@typescript-eslint/parser"),
    parserOptions: {
      projectService: {
        allowDefaultProject: ["*.ts*"],
      },
      tsconfigRootDir: "../tsconfig.json",
    },
  },
});

describe("no-deny-tailwind-tokens", () => {
  it("should pass RuleTester cases", () => {
    ruleTester.run("no-deny-tailwind-tokens", rule, {
      valid: [
        {
          code: '<div className="text-green-500" />',
          options: [{ denyList: ["text-red-500"] }],
        },
      ],
      invalid: [
        {
          code: '<div className="text-red-500" />',
          options: [{ denyList: ["text-red-500"] }],
          errors: [
            { messageId: "denied", data: { className: "text-red-500" } },
          ],
        },
      ],
    });
  });
});
