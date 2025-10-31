import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// Mirror vite.config.ts for environments that prefer .mjs
const isCI = process.env.GITHUB_ACTIONS === 'true';
const base = isCI ? '/portfolio-alicia-vivancos/' : '/';

export default defineConfig({
  plugins: [svelte()],
  base
});