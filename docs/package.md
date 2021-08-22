<!--
 * @Author: wuxh
 * @Date: 2021-08-20 10:46:59
 * @LastEditTime: 2021-08-20 11:04:26
 * @LastEditors: wuxh
 * @Description: 
 * @FilePath: /jcommon/docs/package.md
-->

https://stackoverflow.com/questions/48802204/npm-publish-removing-scripts-from-package-json

 "prepublish": "node .scripts/cleanse-pkg \"webpack,rollup,merge,build,merge:dist,build:dist,prepublish,postpublish,pub\"  \"@babel/core,@rollup/plugin-commonjs,@rollup/plugin-node-resolve,babel-core,babel-loader,babel-plugin-add-module-exports,babel-preset-env,copy,rollup,rollup-plugin-terser,rollup-plugin-typescript2,typescript,webpack,webpack-cli\" ",
    "postpublish": "node .scripts/restore-pkg",