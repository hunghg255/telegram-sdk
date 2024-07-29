import { defineConfig } from 'tsup';

export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['./src/core.ts', './src/index.ts'],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
});
