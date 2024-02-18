import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehypeSlug from 'rehype-slug';
import remarkMath from 'remark-math';
import { getHighlighter } from 'shiki';

const mdsvexExtension = '.svx';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [mdsvexExtension],
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeSlug, rehypeKatexSvelte],
  layout: './src/lib/mdsvex/mdsvex.svelte',
  // TODO: consider rehype-pretty-code instead, could not get it to escape svelte
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const langs = ['dart'];
      const [light, dark] = ['solarized-light', 'dracula-soft'];
      const highlighter = await getHighlighter({
        themes: [light, dark],
        langs,
      });
      await highlighter.loadLanguage(...langs);
      const html = escapeSvelte(
        highlighter.codeToHtml(code, {
          lang,
          themes: {
            dark,
            light,
          },
        }),
      );
      return `{@html \`${html}\` }`;
    },
  },
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
