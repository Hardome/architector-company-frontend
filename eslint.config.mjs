import {defineConfig, globalIgnores} from "eslint/config";

import next from "eslint-config-next";

import prettier from 'eslint-config-prettier/flat';

import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

const eslintConfig = defineConfig([
  ...next,

  prettier,

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
