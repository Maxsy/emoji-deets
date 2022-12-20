// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "lib/index.mjs",
        format: "es",
        sourcemap: false,
      },
      {
        file: "lib/index.umd.js",
        name: "Emoji Deets",
        format: "umd",
        sourcemap: false,
      },
    ],
    plugins: [
      typescript({
        tsconfig: "tsconfig.esm.json",
        sourceMap: false,
      }),
      json(),
    ],
  },
];
