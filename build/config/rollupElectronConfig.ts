import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import alias from '@rollup/plugin-alias';
import { RollupOptions } from 'rollup';
import json from '@rollup/plugin-json';
import path from 'path';

// 导出
export function getRollupOptions(): RollupOptions {
  return {
    // Electron配置
    input: path.join(__dirname, '../../client/index.ts'),
    output: {
      file: path.join(__dirname, '../../dist/main/build.js'),
      format: 'cjs',
      name: 'ElectronMainBundle',
      sourcemap: false,
    },
    plugins: [
      nodeResolve({ preferBuiltins: true, browser: true }), // 去除node警告
      commonjs(),
      json(),
      esbuild({
        include: /\.[jt]sx?$/,
        exclude: /node_modules/,
        sourceMap: false,
        minify: Object.is(process.env.NODE_ENV, 'production'),
        target: 'es2017',
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
        define: {
          __VERSION__: '"x.y.z"',
        },
        loaders: {
          '.json': 'json',
          '.js': 'jsx',
        },
      }),
      alias({
        entries: [
          {
            find: '/@main/',
            replacement: path.join(__dirname, '../../client'),
          },
        ],
      }),
    ],
    external: [
      'crypto',
      'assert',
      'fs',
      'util',
      'os',
      'events',
      'child_process',
      'http',
      'https',
      'path',
      'electron',
    ],
  };
}
