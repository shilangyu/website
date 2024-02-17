import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import remarkMath from 'remark-math';

const mdsvexExtension = '.svx';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [mdsvexExtension],
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatexSvelte],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', mdsvexExtension],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true,
    }),
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
    },
  },
};

export default config;
