import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist/**", "fonts/**"] },
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.ts", "tests/**/*.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { "argsIgnorePattern": "^_", "caughtErrorsIgnorePattern": "^_" },
      ],
    },
  },
);
