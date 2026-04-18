// @ts-check

import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig(eslint.configs.recommended, tsEslint.configs.recommended);
