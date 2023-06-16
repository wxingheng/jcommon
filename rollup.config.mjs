/*
 * @Author: wuxh
 * @Date: 2021-08-19 21:43:33
 * @LastEditTime: 2023-06-16 12:23:08
 * @LastEditors: wxingheng
 * @Description:
 * @FilePath: /jcommon/rollup.config.mjs
 */
import path from "path";
import url from "url";
// import { terser } from 'rollup-plugin-terser'
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
// import typescript from '@rollup/plugin-typescript';
// import pkg from './package.json'
import { readFileSync } from "fs";
import babel from "@rollup/plugin-babel";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkg = JSON.parse(readFileSync("package.json", { encoding: "utf8" }));

/** @type {import('rollup').RollupOptions} */
const options = {
  input: "src/index.ts",
  // makeAbsoluteExternalsRelative: true,
  // preserveEntrySignatures: 'strict',
  output: [
    {
      file: path.resolve(__dirname, pkg.main),
      format: "cjs", // /lib
      plugins: [terser()]
    },
    {
      file: path.resolve(__dirname, pkg.module),
      format: "es", // es
      plugins: [terser()]
    },
    {
      file: path.resolve(__dirname, pkg.unpkg),
      format: "umd", // dist
      name: "jcommon",
      plugins: [terser()]
    },
    {
      file: path.resolve(__dirname, pkg["main-source"]),
      format: "cjs", // /lib
    },
    {
      file: path.resolve(__dirname, pkg["module-source"]),
      format: "es", // es
    },
    {
      file: path.resolve(__dirname, pkg["unpkg-source"]),
      format: "umd", // dist
      name: "jcommon",
    },
  ],
  plugins: [
    typescript(),
    commonjs(),
    resolve(),
    babel({ babelHelpers: "bundled", extensions: [".ts"] }),
  ],
};
export default options;
