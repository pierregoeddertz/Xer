import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

export default [
  {
    input: 'src/components/Xer/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        modules: true,
        extract: true,
        minimize: true,
      }),
      typescript({ 
        tsconfig: './tsconfig.json',
        exclude: ['**/__tests__/**'],
        compilerOptions: {
          jsx: 'react-jsx'
        }
      }),
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  {
    input: 'src/components/Xer/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts.default()],
  },
]; 