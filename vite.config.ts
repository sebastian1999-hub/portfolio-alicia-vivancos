/// <reference types="node" />
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// When deploying to GitHub Pages under /portfolio-alicia-vivancos/
// we need to set the base path so assets resolve correctly.
const isCI = process.env.GITHUB_ACTIONS === 'true';
const base = isCI ? '/portfolio-alicia-vivancos/' : '/';

export default defineConfig({
  plugins: [svelte()],
  base
});