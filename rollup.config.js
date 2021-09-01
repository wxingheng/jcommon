/*
 * @Author: wuxh
 * @Date: 2021-08-19 21:43:33
 * @LastEditTime: 2021-09-01 22:03:45
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

/** @type {import('rollup').RollupOptions} */
const options = {
  input: 'src/index.ts',
  output: [
    {
      file: path.resolve(__dirname, pkg.main),
      format: 'cjs' // /lib
    },
    {
      file: path.resolve(__dirname, pkg.module),
      format: 'es' // es
    },
    {
      file: path.resolve(__dirname, pkg.unpkg),
      format: 'umd', // dist
      name: 'jcommon',
      
    }
  ],
  plugins: [resolve(), commonjs(), typescript(), terser()]
}
export default options
