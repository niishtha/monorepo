import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const moduleType = process.env.MODULE_TYPE;

export default {
  input: 'src/index.js',
  output: {
    file: {
      es: pkg.module,
      cjs: pkg.main,
    }[moduleType],
    format: moduleType,
  },
  plugins: [
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['@babel/plugin-external-helpers'],
      externalHelpers: true,
    })
  ]
}