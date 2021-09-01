/*
 * @Author: wuxh
 * @Date: 2021-08-19 21:43:33
 * @LastEditTime: 2021-09-01 21:29:12
 * @LastEditors: wuxh
 * @Description:
 * @FilePath: /jcommon/rollup.config.js
 */
import path from 'path'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
// import { babel } from '@rollup/plugin-babel'

/** @type {import('rollup').RollupOptions} */
const options = {
  input: 'src/index.ts',
  output: [
    {
      file: path.resolve(__dirname, pkg.main),
      format: 'cjs' // /lib
      // plugins: [terser()]
    },
    {
      file: path.resolve(__dirname, pkg.module),
      format: 'es', // es
      // plugins: [terser()]
    },
    {
      file: path.resolve(__dirname, pkg.unpkg),
      format: 'umd', // dist
      name: 'jcommon',
      plugins: [
        // terser(),
        // babel({ babelHelpers: 'bundled' })
      ]
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    // terser(),
    // babel({ babelHelpers: 'bundled' })
  ]
}
export default options
