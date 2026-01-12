import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts"
	]), 
	{
		rules: {
			"no-unused-vars": ["error", {varsIgnorePattern: "^[A-Z_]"}],
			"semi": ["error", "always", {"omitLastInOneLineBlock": false}],
			"comma-dangle": ["error", "never"],
			quotes: ["error", "double"],
			"indent": ["error", "tab"]
		}
	}
]);

export default eslintConfig;
