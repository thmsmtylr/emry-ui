import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
import svgr from "@svgr/rollup";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { DEFAULT_EXTENSIONS } from "@babel/core";

const components = [
  {
    name: "button",
    input: "src/button.ts",
  },
  {
    name: "button-social",
    input: "src/button-social.ts",
  },
];

export default components.map((component) => ({
  input: `./react/${component.name}/src/index.ts`, // Use the root-level index.ts as the input
  output: [
    {
      dir: `./react/${component.name}/dist`, // Output directory for generated JavaScript files
      format: "esm", // Same for the ES module format
      entryFileNames: "index.esm.js",
      chunkFileNames: "[name]-[hash].esm.js",
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    del({ targets: `./dist/${component.name}/*` }),
    svgr(),
    typescript({
      verbosity: 1,
      tsconfig: "./tsconfig.json",
    }),
    url({
      include: [
        "./fonts/**/*.ttf",
        "./fonts/**/*.woff",
        "./fonts/**/*.woff2",
        "./fonts/**/*.svg",
      ],
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
    }),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      plugins: [
        autoprefixer(),
        tailwind({
          config: "./tailwind.config.js",
        }),
      ],
    }),
    terser({
      compress: true,
      mangle: true,
      output: {
        preamble: "/* eslint-disable */",
        comments: false,
      },
    }),
  ],
}));
