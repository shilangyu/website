import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { selectAll } from 'hast-util-select';
import { escapeSvelte, mdsvex } from 'mdsvex';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehypeSlug from 'rehype-slug';
import remarkMath from 'remark-math';
import { getHighlighter } from 'shiki';

const mdsvexExtension = '.svx';

// Makes headings with id clickable
// @ts-ignore
const autoLinkHeadings = () => (tree) => {
  for (const node of selectAll('h1,h2,h3,h4,h5,h6', tree)) {
    const id = node.properties.id;
    if (id) {
      node.children = [
        {
          type: 'element',
          tagName: 'a',
          properties: {
            // make sure this class is styled in global css
            className: ['linkable-heading'],
            ariaHidden: 'true',
            tabIndex: -1,
            href: `#${id}`,
          },
          children: [...node.children],
        },
      ];
    }
  }
};

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [mdsvexExtension],
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeSlug, autoLinkHeadings, [rehypeKatexSvelte, { output: 'html' }]],
  layout: './src/lib/mdsvex/mdsvex.svelte',
  highlight: {
    highlighter: async (code, lang = 'text') => {
      /** @type {Array<import('shiki').BundledLanguage>} */
      const langs = ['dart'];
      const [light, dark] = ['catppuccin-latte', 'dracula-soft'];
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
